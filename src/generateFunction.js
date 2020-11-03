function createPointer( arg ) {

    if ( arg.isArray ) {
                
        throw new Error();

    }

    let size = null;
    switch ( arg.type ) {

        case 'SpiceInt':
            size = 'INT_SIZE';
            break;

        case 'SpiceDouble':
            size = 'DOUBLE_SIZE';
            break;

        case 'SpiceChar':
            size = 'STR_SIZE';
            break;

        default:
            throw new Error();

    }
    return `\tconst ${arg.name}_ptr = Module._malloc( ${size} );\n`;

}

function readPointer( arg ) {

    let func = null;
    const ptr = `${arg.name}_ptr`;
    switch ( arg.type ) {

        case 'SpiceInt':
            func = `getValue( ${ptr}, 'i32' )`;
            break;

        case 'SpiceDouble':
            func = `getValue( ${ptr}, 'double' )`;
            break;

        case 'SpiceChar':
            func = `Pointer_stringify( ${ptr} )`;
            break;

        default:
            throw new Error();

    }
    
    return `\tconst ${arg.name} = Module.${func};\n\tModule._free( ${ptr} );\n\n`;

}

function generateFunction( info ) {

    const args = Object.values( info.args ).sort( ( a, b ) => a.index - b.index );
    const inputArgs = args.filter( arg => arg.isInput );
    const outputArgs = args.filter( arg => ! arg.isInput );

    const signature = `function ${info.name.replace( /_c$/, '' )}( ${inputArgs.map( arg => arg.name ).join( ', ' )} ) {`;
    const pointers = args
        .filter( arg => arg.isPointer && ! arg.isInput )
        .map( createPointer );

    const readPointers = args
        .filter( arg => arg.isPointer && ! arg.isInput )
        .map( readPointer );

    const argTypes = [];
    const argValues = [];    
    args
        .forEach( arg => {
            
            if ( arg.isPointer && ! arg.isInput ) {

                argValues.push( `${arg.name}_ptr` );
                argTypes.push( 'number' );

            } else {

                argValues.push( `${arg.name}` );
                switch( arg.type ) {

                    case 'SpiceInt':
                    case 'SpiceDouble':
                        argTypes.push( 'number' );
                        break;
                    
                    case 'SpiceChar':
                        argTypes.push( 'string' );
                        break;

                }

            }

        } );

    if ( info.returnInfo.isPointer ) {

        throw new Error();

    }

    let results = [];
    let includesReturn = false;
    let returnType = null;
    switch ( info.returnInfo.type ) {

        case 'SpiceInt':
        case 'SpiceDouble':
            returnType = `'number'`;
            includesReturn = true;
            break;

        case 'void':
            returnType = 'null';
            break;
        
        default:
            throw new Error();

    }

    let ccall = `\t${ includesReturn ? 'const returnValue = ' : '' }Module.ccall(
        '${info.name}',
        ${returnType},
        [ ${argTypes.map( arg => `'${arg}'` ).join( ', ' )} ],
        [ ${argValues.join( ', ' )} ],
    );\n`;

    results.push( ...outputArgs.map( arg => arg.name ) );

    let returnStatement = '';
    if ( results.length ) {

        if ( includesReturn ) {

            results.push( 'returnValue' );

        }
        returnStatement = `\treturn { ${results.join( ', ' )} };`;

    } else if ( includesReturn ) {

        returnStatement = '\treturn returnValue;';

    } else {

        returnStatement = '\treturn;';

    }

    return signature + '\n\n' +
        ( pointers.length ? '\t// create output pointers\n' : '' ) +
        pointers.join( '' ) +
        '\n\t// evaluate function\n' + ccall + '\n' +

        ( readPointers.length ? '\t// read and free output pointers\n' : '' ) +
        readPointers.join( '' ) +
        returnStatement + '\n\n}\n';

}

module.exports = { generateFunction };