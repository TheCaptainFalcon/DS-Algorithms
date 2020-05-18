// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//    let reverse = parseInt(n.toString().split('').reverse().join(''))
//     if (Math.sign(n) === -1) {
//         return (reverse * -1);
//     } else {
//         return reverse;
//     }
// }

// function reverseInt(n) {
//     let reverse = parseInt(n.toString().split('').reverse().join(''))
//     if (n < 0) {
//         return reverse * -1;
//     } else {
//         return reverse;
//     };
// };

function reverseInt(n) {
    let reverse = parseInt(n.toString().split('').reverse().join(''))
    return reverse * Math.sign(n);
};

module.exports = reverseInt;
