/*
* memoize.js
* by @philogb and @addyosmani
* with further optimizations by @mathias
* @DmitryBaranovsk and @GotNoSugarBaby
* perf tests: http://bit.ly/q3zpG3
* Released under an MIT license.
*/
function memoize(fn) {
   "use strict";
   var cache = (fn.memoize = fn.memoize || {}),
       stringifyJson = JSON.stringify,
       sliceArray = Array.prototype.slice;

    return function () {
        var hash = stringifyJson(sliceArray.call(arguments));
        return (hash in cache) ? cache[hash] : cache[hash] = fn.apply(this, arguments);
    };
}
