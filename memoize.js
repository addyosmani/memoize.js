/*
* memoize.js
* by @philogb and @addyosmani
* further optimizations by @mathias
* Released under an MIT license.
*/
function memoize( fn ) {  
    return function () {  
        var args = Array.prototype.slice.call(arguments),  
            hash = "",  
            i  = args.length;  
            toString = Object.prototype.toString,
            callEm = toString.call({}),
            currentArg = null;
        while(i--){  
          currentArg = args[i];
          hash += (callEm == toString.call(currentArg)) ?   
          JSON.stringify(currentArg) : currentArg;  
          fn.memoize || (fn.memoize = {});  
      }   
        return (hash in fn.memoize) ? fn.memoize[hash] :   
        fn.memoize[hash] = fn.apply( this , args );  
    };  
}  