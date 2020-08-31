// Reuseable evaluation wrapper in which function cspice argument info can be passed to
// call the given method.
function evaluate( Module, funcName, returnInfo, argInfo, userArgs ) {

    // Module.ccall(
    //     'cronos_',
    //     "number",
    //     ["string","number","string","number","number","number","number"],
    //     [cmdlin,intptr,inptim,outtim_ptr,cmdlin.length,inptim.length,100]
    // );

    // TODO:
    // - Resolve whether or not we need to generate pointers for each argument / return
    // value and malloc memory.
    // - Set values for any of the input pointers.
    // - Args that require specifying the length of a passed array will be problematic? Or
    // user will just have to be aware and pass them in.

    const argPointers = new Array( argInfo.length );
    const argTypes = new Array( argInfo.length );
    const argValues = new Array( argInfo.length );

    for ( let i = 0, l = argInfo.length; i < l; i ++ ) {

        const info = argInfo[ i ];
        if ( info.isPointer ) {

            const ptr;
            // TODO: create pointer and set data

            argTypes[ i ] = 'number';
            argValues[ i ] = ptr;
            argPointers[ i ] = ptr;

        } else {

            argTypes[ i ] = info.type;
            argValues[ i ] = userArgs[ i ];

        }

    }
    
    const returnedValue = Module.ccall( funcName, returnType, argTypes, argValues );

    // TODO:
    // - Read any pointer data back from output and return pointers.
    // - Release pointer memory.
    // - Return data as an array if there are multiple outputs, single value otherwise.

    const result = [];
    if ( returnedValue !== undefined && returnedValue !== null ) {

        // TODO: handle returnInfo
        result.push( returnedValue );

    }

    for ( let i = 0, l = argInfo.length; i < l; i ++ ) {

        if ( info.isPointer ) {

            if ( ! info.isInput ) {

                const value;
                // TODO: read back pointer data
                result.push( value );

            }

            Module._free( argPointers[ i ] );

        }

    }

    if ( result.length === 0 ) {
        
        return undefined;

    } else if ( result.length === 1 ) {

        return result[ 0 ];

    } else {

        return result;

    }

}