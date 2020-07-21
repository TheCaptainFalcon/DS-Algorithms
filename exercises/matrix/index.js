// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let results = [];

    // needed to create sub-arrays depending on n
    for (let i = 0; i < n; i++) {
        results.push( [] );
    }
    // starting number to set in arrays
    let counter = 1;
    let startColumn = 0;
    let endColumn = n-1;
    let startRow = 0;
    let endRow = n-1;

    while(startColumn <= endColumn && startRow <= endRow) {
        // First top row
        for (let i = startColumn; i <= endColumn; i++) {
            results[startRow][i] = counter;
            counter++;
        }
        startRow++;
        
        //*notice the increase is now the center of attention - the next moving element of the next loop//

        // shift to Right column
        for(let i = startRow; i <= endRow; i++) {
            results[i][endColumn] = counter;
            counter++;
        }
        endColumn--;

        // bottom row
        // notice the reverse pattern and sign change
        for(let i = endColumn; i >= startColumn; i--) {
            results[endRow][i] = counter;
            counter++;
        }
        endRow--;

        // start column (complete loop back to left side)
        for(let i = endRow; i >= startRow; i--) {
            // i is first because its a changing element from middle row to upper 
            results[i][startColumn] = counter;
            counter++;
        }
        startColumn++;
        // after this point, it returns back to the top of the function 
        // assumption to target the middle with all columns and rows at same value
    }
    return results;
}

module.exports = matrix;
