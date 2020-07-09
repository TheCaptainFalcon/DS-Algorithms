// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
   return cleanString(stringA) === cleanString(stringB)
}

// regex \w matches any non-word character [^a-zA-z0-9_] aka only letters and numbers, it also removes underscore vs \w_ which will negate the _. 
// the second set of '' after the regex - replaces all non word characters into a space
// lowercase as instructions provided, split with '' turns into a sublist array, separated by commas, sort is alphabetical, join removes the commas with ''
function cleanString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}

module.exports = anagrams;