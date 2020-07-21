// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    // because the first two numbers will always be constant and the fact that there are no previous 2 numbers for those entries
    let result = [0, 1] 
 
    for(let i = 2; i <= n; i++) {
        let a = result[i-1];
     let b = result[i-2];
      let c = a + b;
      result.push(c)
    }
     return result[n]
}

// // recursion solution
// function fib(n) {
//     if (n < 2) {
//         return n;
//     } else {
//     return fib(n-2) + fib(n-1);
//     }
// }

module.exports = fib;
