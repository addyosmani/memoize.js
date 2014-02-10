## Memoize.js

> A faster JavaScript memoizer

Whilst not new by any means, memoization is a useful optimization technique for caching the results of function calls such that lengthy lookups or expensive recursive computations can be minimized where possible.

The basic idea is that if you can detect an operation has already been previously completed for a specific set of input values, the stored result can instead be returned instead of repeating the operation again.

Some of the problems memoization can help optimize include: recursive mathematics, algorithmic caching of canvas animation and more generally, any problems which can be expressed as a set of calls to the same function with a combination of argument values that repeat.

### Usage

Imagine having a function you want to memoize, like running the Fibbonacci sequence:

```
var fib, fiborg;

fiborg = fib = function (x) {
  if(x < 2) return 1; else return fib(x-1) + fib(x-2);
}
```

We can then memoize it as follows:

```
fib = memoize(fiborg);
fib(20);
```

### License

Released under an MIT license.