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
        `\\s*([a-zA-A0-9_]+\\s*\\*?)\\s+${ name }\\s*\\(([^)]*)\\)`, 'g'
    );
    signatureRegex.lastIndex = procedureRegex.lastIndex;    
    const [ fullProcedure, returnType, args ] = signatureRegex.exec( contents );

    const argsMap = {};
    if ( args.trim() !== '' && args.trim() !== 'void' ) {

        // extract type, pointer asterisk, arg name, and array length
        const argTypeRegex = /([a-zA-Z0-9_]+\s*\*?)\s*([a-zA-Z0-9_]+)(\[\d+]){0,1}/;
        args
            .split( ',' )
            .forEach( a => {
     
                if ( a.trim() === '...' ) {

                    throw new Error( 'Unhandled ellipses arguments.' );

                }

                const [, type, name, arrayLen ] = a.trim().match( argTypeRegex );
                const info = {
                    isPointer: !!arrayLen || /\*$/.test( type ),
                    isFixedArray: !!arrayLen,
                    name: name.trim(),
                    type: type.replace( /\*$/, '' ).trim(),
                    arrayLength: arrayLen ? parseInt( arrayLen.replace( /\D/g, '' ) ) : 0,
                };                

                argsMap[ name ] = info;
    
            } );
    
    }

    // get inputs
    const inputsRegex = /-Detailed_Input((\s|\S)+)-Detailed_Output/m;
    const [ , inputsBody ] = contents.match( inputsRegex );

    for ( const key in argsMap ) {

        const regex = new RegExp( `\\s{3}${ key }(\\s{3}|,\n)` );
        argsMap[ key ].isInput = regex.test( inputsBody );

    }

    return {
        signature: fullProcedure.trim(),
        name,
        args: argsMap,
        returnType,
    }

}

module.exports = { extractParameters };