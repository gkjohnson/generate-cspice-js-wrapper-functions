const { type } = require("os");

function extractParameters( contents ) {

    contents = contents.replace( /\r/g, '' );
    
    // get function name
    const procedureRegex = /\s+-Procedure ([a-zA-Z0-9_]+)/g;
    if ( ! contents.match( procedureRegex ) ) {
        
        return null;

    }
    const name = procedureRegex.exec( contents )[ 1 ];

    // get arguments
    const signatureRegex = new RegExp(
        `\\s*([a-zA-Z0-9_]+\\s*\\*?)\\s+${ name }\\s*\\(([^)]*)\\)`, 'g'
    );
    signatureRegex.lastIndex = procedureRegex.lastIndex;    
    const [ fullProcedure, returnType, args ] = signatureRegex.exec( contents );
    const returnInfo = {
        isPointer: /\*$/.test( type ),
        type: returnType.replace( /\*$/, '' ),
    };

    const argsMap = {};
    if ( args.trim() !== '' && args.trim() !== 'void' ) {

        // extract type, pointer asterisk, arg name, and array length
        const argTypeRegex = /(const\s+)?([a-zA-Z0-9_]+\s*\*?)\s*([a-zA-Z0-9_]+)(\[\d+]){0,1}/;
        args
            .split( ',' )
            .forEach( ( arg, index ) => {
     
                if ( arg.trim() === '...' ) {

                    throw new Error( 'Unhandled ellipses arguments.' );

                }

                const [,, type, name, arrayLen ] = arg.trim().match( argTypeRegex );
                const info = {
                    isPointer: !!arrayLen || /\*$/.test( type ),
                    isFixedArray: !!arrayLen,
                    name: name.trim(),
                    type: type.replace( /\*$/, '' ).trim(),
                    arrayLength: arrayLen ? parseInt( arrayLen.replace( /\D/g, '' ) ) : 0,
                    index,
                };                

                argsMap[ name ] = info;
    
            } );
    
    }

    // get inputs
    const inputsRegex = /-Detailed_Input((\s|\S)+)-Detailed_Output/m;
    const [ , inputsBody ] = contents.match( inputsRegex );

    for ( const key in argsMap ) {

        const regex = new RegExp( `\\s{3}${ key }(\\s{3}|,\\s*\\n)` );
        argsMap[ key ].isInput = regex.test( inputsBody );

    }

    const sortedArgs = Object.values( argsMap )
        .sort( ( a, b ) => a.index - b.index );

    for ( let i = 1; i < sortedArgs.length; i ++ ) {

        const lastIsInput = sortedArgs[ i - 1 ].isInput;
        const thisIsInput = sortedArgs[ i ].isInput;

        if ( thisIsInput && ! lastIsInput ) {

            throw new Error( 'Output comes before input in function signature.' );

        }

    }

    for ( let i = 0; i < sortedArgs.length; i ++ ) {

        const info = sortedArgs[ i ];
        if ( ! info.isInput && info.isPointer && ( info.type === 'void' || info.type === 'char' ) ) {

            throw new Error( 'Output cannot be arbitrary length char or void array.' );

        }

    }

    return {
        signature: fullProcedure.trim(),
        name,
        args: argsMap,
        returnInfo,
    };

}

function generateFuncInfo( result ) {

    const args = Object
        .values( result.args )
        .sort( ( a, b ) => a.index - b.index );

    const inputs = args.filter( arg => arg.isInput );
    const outputs = args.filter( arg => ! arg.isInput );

    let mdContents = '';
    mdContents +=
        `## ${ result.name }\n` +
        
        '```c\n' + result.signature + '\n```\n';

    mdContents += '#### Return\n```\n';
    mdContents += result.returnInfo.type + ( result.returnInfo.isPointer ? '*' : '' );
    mdContents += '\n```\n';

    mdContents += '#### Inputs\n';
    if ( inputs.length === 0 ) {

        mdContents += '_no input arguments._\n';
    
    } else {

        mdContents += '```\n';
        inputs.forEach( arg => {

            mdContents += arg.type
                + ( arg.isPointer ? '* ' : ' ' )
                + arg.name
                + ( arg.isFixedArray ? `[${arg.arrayLength}]` : '' )
                + '\n';

        } );
        mdContents += '```\n';

    }

    mdContents += '#### Outputs\n';
    if ( outputs.length === 0 ) {

        mdContents += '_no output arguments._\n';

    } else {

        mdContents += '```\n';
        outputs.forEach( arg => {

            mdContents += arg.type
                + ( arg.isPointer ? '* ' : ' ' )
                + arg.name
                + ( arg.isFixedArray ? `[${arg.arrayLength}]` : '' )
                + '\n';

        } );
        mdContents += '```\n';
    
    }
    return mdContents;

}

module.exports = { extractParameters, generateFuncInfo };