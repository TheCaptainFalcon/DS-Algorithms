// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data) {
        // is the new inserted data < the current node (parent) and is there an existing node in this.left?
        if(data < this.data && this.left) {
            // recursion solution (notice the repeat)
            // allows the traversal down the tree going left 
            this.left.insert(data);
        } else if (data < this.data) {
            // also notice how this.left is now the new Node, as opposed to a typical push
            this.left = new Node(data);
        } else if (data > this.data && this.right) {
            this.right.insert(data)
        } else if (data > this.data) {
            this.right = new Node(data);
        }
    }
    contains(data) {
        if(data === this.data) {
            // it is "this" because we want to return the ENTIRE node
            return this;
        } else if(data < this.data && this.left) {
            // we want to have a return statement here
            return this.left.contains(data);
        } else if (data > this.data && this.right) {
            return this.right.contains(data);
        } else {
            return null;
        }

        // if(data < this.data && this.left) {
        //     this.left.contains(data);
        // } else if (data > this.data && this.right) {
        //     this.right.contains(data);
        // } else if (data === this.data) {
        //     return this;
        // } else {
        //     return null;
        // }
    }
}

module.exports = Node;
