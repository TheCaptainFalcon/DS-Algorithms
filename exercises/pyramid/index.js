// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    // needs double parenthesis for expression rules
    let midpoint = Math.floor((2 * n - 1) / 2)
    for(let row = 0; row < n; row++) {
        let stair = '';
        for(let column = 0; column < 2 * n - 1; column++) {
            // creates an 'in between' barrier, therefore must be = to column value
            if(midpoint - row <= column && midpoint + row >= column) {
                stair += '#';
            } else {
                stair += ' ';
            }
        }
        console.log(stair)
    }
}

module.exports = pyramid;
