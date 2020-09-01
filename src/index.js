const path = require( 'path' );
const fs = require( 'fs' );
const { extractParameters, generateFuncInfo } = require('./utils');
const inputPath = process.argv[ 2 ];
const outputPath = process.argv[ 3 ];

const rootDir = path.resolve( process.cwd(), inputPath );
const outputDir = path.resolve( process.cwd(), outputPath );
fs.readdir( rootDir, ( err, files ) => {

    if ( err ) {
        
        console.error(err);
        return;

    }

    const processedInfo = [];
    const skippedFunctions = [];
    files.forEach( file => {

        const filePath = path.resolve( rootDir, file );
        const contents = fs.readFileSync( filePath, { encoding: 'utf8' } );

        try {
    
            const result = extractParameters( contents );
            if ( result ) {
    
                // TODO: generate the function for running the procedure in cspice.js
                
                processedInfo.push( result );
                console.log( 'Processed ', result.name );

            } else {

                console.log( 'Skipping ', file );

            }

        } catch ( e ) {

            console.error( 'Error in ', file );
            console.error( e );
            skippedFunctions.push( file.replace( /\.c$/, '' ) );

        }

    } );
    
    let mdContents = '';
    processedInfo.forEach( info => {
        
        mdContents += generateFuncInfo( info )
    
    } );

    fs.writeFileSync( path.resolve( outputDir, 'FUNCTION_INFO.md' ), mdContents, { encoding: 'utf8' } );

    let processedFunctions = '';
    let types = new Set();
    processedInfo.forEach( info => {

        types.add( info.returnInfo.type );
        Object.values(info.args).forEach( arg => {

            types.add( arg.type );

        } );

    } );
    processedFunctions += '## Types\n';
    types.forEach( type => {

        processedFunctions += '- `' + type + '`\n';

    } );

    processedFunctions += '## Skipped Functions\n';
    skippedFunctions.forEach( name => {

        processedFunctions += '- `' + name + '`\n';

    } );

    processedFunctions += '## Processed Functions\n';
    processedInfo.forEach( info => {

        processedFunctions += '- `' + info.name + '`\n';

    } );
    fs.writeFileSync( path.resolve( outputDir, 'PROCESSED_FUNCTIONS.md' ), processedFunctions, { encoding: 'utf8' } );

} );
