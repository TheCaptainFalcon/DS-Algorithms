// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
        
    }
    add(data) {
        this.children.push(new Node(data))
    }

    remove(data) {
        // must add this.children = this.children etc. because the filter method does not modify the original array
        this.children = this.children.filter(node => {
            return node.data !== data
        })
    }
}

class Tree {
    constructor() {
        // essentially the head from linked list
        this.root = null;
    }
    traverseBF(fn) {
        let arr = [this.root];
        
        while(arr.length) {
            // removes the first elements of array
            let node = arr.shift();

            // without the spread operator it would push an array into an array
            // thus making it into a nested array
            // other solution is to make a for..of loop and iterate results into arr
            arr.push(...node.children);
            // 'accepts a function'
            fn(node);
        }     
    }

    traverseDF(fn) {
        let arr = [this.root];

        while(arr.length) {
            // remains shift for normal iterative operations
            // shift = removal
            let node = arr.shift();
            // notice difference from push -> unshift
            // unshift = add
            arr.unshift(...node.children);
            fn(node)
        }
    }
}



module.exports = { Tree, Node };
