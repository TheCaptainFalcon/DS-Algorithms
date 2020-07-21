// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// // iterative solution - note that this is a linear runtime ex

// function fib(n) {
//     // because the first two numbers will always be constant and the fact that there are no previous 2 numbers for those entries
//     let result = [0, 1] 
 
//     for(let i = 2; i <= n; i++) {
//         let a = result[i-1];
//      let b = result[i-2];
//       let c = a + b;
//       result.push(c)
//     }
//      return result[n]
// }

// recursive solution

function slowFib(n) {
    if (n < 2) {
        return n;
    } else {
    return fib(n-2) + fib(n-1);
    }
}

// memoized (improved) solution of the recursive solution
// utilizes slowFib above
const fib = memoize(slowFib);

function memoize(fn) {
    let cache = {};

    return function(...args) {
        if(cache[args]) {
            return cache[args]
        } else {
        // whenever we call a function with an array of arguments, we must use the apply helper function
        let result = fn.apply(this, args)
        cache[args] = result;

        return result;
        }
    }
}

module.exports = fib;
