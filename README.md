##Memoization.js

Whilst not new by any means, memoization is a useful optimization technique for caching the results of function calls such that lengthy lookups or expensive recursive computations can be minimized where possible.

The basic idea is that if you can detect an operation has already been previously completed for a specific set of input values, the stored result can instead be returned instead of repeating the operation again.

Some of the problems memoization can help optimize include: recursive mathematics, algorithmic caching of canvas animation and more generally, any problems which can be expressed as a set of calls to the same function with a combination of argument values that repeat.

Memoize.js offers an optimized solution for memoization in JavaScript (complete write-up coming soon).

