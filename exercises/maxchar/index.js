// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//     let char = {};
//     for (let chars of str) {
//         if (char[chars]) {
//             char[chars] ++;
//         } else {
//             char[chars] = 1;
//         }
//     }
//     return char;
// }

// Now to obtain the key with the highest value

function maxChar(str) {
    let charMap = {};
    let max = 0;
    let maxChar = '';

    for (let chars of str) {
        if (charMap[chars]) {
            charMap[chars] ++;
        } else {
            charMap[chars] = 1;
        }
    }

    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
}


module.exports = maxChar;
