const path = require( 'path' );
const fs = require( 'fs' );
const { extractParameters } = require('./utils');
const inputPath = process.argv[ 2 ];
const outputPath = process.argv[ 3 ];

const rootDir = path.resolve( process.cwd(), inputPath );
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

            } else {

                console.log( 'Skipping ', file );

            }

        } catch ( e ) {

            console.error( 'Error in ', file );
            console.error( e );

        }

    } );

} );
