const path = require( 'path' );
const fs = require( 'fs' );
const { extractParameters } = require('./utils');
const inputPath = process.argv[ 2 ];
const outputPath = process.argv[ 3 ];

let mdContents = '';
const rootDir = path.resolve( process.cwd(), inputPath );
const outputDir = path.resolve( process.cwd(), outputPath );
fs.readdir( rootDir, ( err, files ) => {

    if ( err ) {
        
        console.error(err);
        return;

    }

    files.forEach( file => {

        const filePath = path.resolve( rootDir, file );
        const contents = fs.readFileSync( filePath, { encoding: 'utf8' } );

        try {
    
            const result = extractParameters( contents );
            if ( result ) {
    
                // TODO: generate the function for running the procedure in cspice.js

                console.log( 'Processed ', result.name );

                const args = Object
                    .values( result.args )
                    .sort( ( a, b ) => a.index - b.index );

                const inputs = args.filter( arg => arg.isInput );
                const outputs = args.filter( arg => ! arg.isInput );

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

            } else {

                console.log( 'Skipping ', file );

            }

        } catch ( e ) {

            console.error( 'Error in ', file );
            console.error( e );

        }

    } );
    
    fs.writeFileSync( path.resolve( outputDir, 'FUNC_INFO.md' ), mdContents, { encoding: 'utf8' } );

} );
