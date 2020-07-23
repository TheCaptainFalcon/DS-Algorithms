// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    // For a constructor, when we create a new instance of a class, the constructor will automatically be called when creating a new instance
    constructor() {
        this.data = [];
    }

    add(record) {
        // unshift to push into front of array, as opposed to end with push
        this.data.unshift(record)
    }

    remove() {
        // remove whatever is at the end - but also return to be able to work with what we removed
        return this.data.pop();
    }
}

module.exports = Queue;
