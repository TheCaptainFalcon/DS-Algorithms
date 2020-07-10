// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {

    // to understand behavior between indexing and slice
    let example = 'hello there sir'

    example[0]
    example.slice(1)

    let arr = [];
    
    // key is the extra space in split to separate by words into a separate array
    for(let word of str.split(' ')) {
    arr.push(word[0].toUpperCase() + word.slice(1))
    }
  
  return arr.join(' ')
}

module.exports = capitalize;
