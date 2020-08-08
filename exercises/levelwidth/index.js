// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    // peculiar how the stopper is included in the initial starting arr
    let arr = [root, 's'];
    let counter = [0];

    while(arr.length > 1) {
        // although i thought this was initially just for the 's', but this logic 
        // applies for every element as normal logic, but it is still a key for both
        let node = arr.shift()

        if(node === 's') {
            counter.push(0)
            arr.push('s')
        } else {
            arr.push(...node.children)
            counter[counter.length -1]++;
        }
    }
    return counter;
}

module.exports = levelWidth;
