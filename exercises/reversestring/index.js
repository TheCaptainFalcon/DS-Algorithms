// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     let newString = "";
//     for (let i = str.length -1; i >= 0; i-- ){
//         newString += str[i]
//     }
//     return newString;
// }

// function reverse(str) {
//     return str
//     .split('')
//     .reverse()
//     .join('')
// }


// function reverse(str) {
//     const arr = str.split('')
//     arr.reverse()
//     return arr.join('')
// }

function reverse(str) {
    let reversed = '';
    for (let character of str) {
        reversed = character + reversed;
    }
    return reversed;
}

console.log(reverse('apple'))

// function reverse(str) {
//     return str.split('').reduce((reverse, character) => character + reverse, '');
// }


module.exports = reverse;
