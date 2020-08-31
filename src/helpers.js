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

    Module.ccall( funcName, returnType, argTypes, argValues );

    // TODO:
    // - Read any pointer data back from output and return pointers.
    // - Release pointer memory.
    // - Return data as an array if there are multiple outputs, single value otherwise.

}