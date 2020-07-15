// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let count = 0;
    for(let i of str) {
        // FYI not particularly dry
        if (i === 'a' || i === 'A') {
            count += 1; 
        } else if (i === 'e' || i === 'E') {
            count += 1; 
        } else if (i ==='i' || i === 'I') {
            count += 1; 
        } else if (i === 'o' || i === 'O') {
            count +=1; 
        } else if (i=== 'u' || i === 'U') {
            count += 1; 
        } else {
            count += 0; 
        }
    }
    return count;
}

// function vowels(str) {
//     let count = 0;
//     let check = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O','u','U']
//     // could always use let i of str.toLowerCase(), therefore eliminating capital edge casing
//     for(let i of str) {
//         if(check.includes(i)) {
//             count += 1;
//         } else {
//             count += 0;
//         }
//     }
//     return count;
// }



module.exports = vowels;
