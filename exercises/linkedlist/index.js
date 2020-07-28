// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    
    insertFirst(data) {
        this.head = new Node(data, this.head);

        // it may be better to just aim for insertAt if we are looking at other elements, which will make first/last methods redundant
        // therefore, this is a refactor appropriately fitting for this scenario
        // this.insertAt(data, 0)
    }

    size() {
        let counter = 0;
        let node = this.head;

        // while node is a truthy value (null is falsey, thus tails do not continue()
        while(node) {
            counter++;
            node = node.next;
        }
        return counter;
    }
    
    getFirst() {
        return this.head;

        // refactor 
        // this.getAt(0)
    }

    getLast() {
        // edge-case to see if there are no nodes
        if (!this.head) {
            return null;
        }

        let node = this.head
        while(node) {
            if(!node.next) {
                return node;
            }
            node = node.next;
        }

        // refactor
        // return this.getAt(this.size() -1);
    }

    clear() {
        // although there may be nodes in memory, as far as the linked list is concerned, there are no nodes
        this.head = null;
    }

    removeFirst() {
        if(!this.head) {
            return null;
        }

        let node = this.head
        this.head = node.next
        // or can do this.head = this.head.next (per solution vid)
        
    }

    removeLast() {
        // edge case for no nodes
        if(!this.head) {
            return null;
        }

        // edge case for 1 node
        if(!this.head.next) {
            return this.head = null;
        }

        let previous = this.head
        let node = this.head.next
        while(node.next) {
            previous = node
            node = node.next
        }
        previous.next = null;
    }

    insertLast(data) {
        let last = this.getLast();

        if(last) {
            // if there are nodes in the linked list
            last.next = new Node(data)
        } else {
            // if there are no existing nodes
            this.head = new Node(data)
        }
    }

    getAt(index) {
        // edge case for no nodes
        // also may not be necessary because of while loop exit at bottom
        if(!this.head) {
            return null;
        }

        let node = this.head;
        let counter = 0;

        while(node) {
            if(counter === index) {
                return node;
            } 
            counter++;
            node = node.next;
            }
            // edge case for index out of bounds
            // unable to find correct node - exit while loop 
            return null;
        }

    removeAt(index) {

        // edge case for no nodes
        if(!this.head) {
            return null;
        }

        if(index === 0) {
            // this still works as expected even if there are no nodes ahead
            return this.head = this.head.next
        }
        
        // reuse getAt to find previous nodes of current index
        let previous = this.getAt(index - 1);

        // edge case for out of bounds larger than 1 index difference with available nodes        
        if(!previous) {
            return null;
        }

        // edge case for 1 index larger than available nodes
        if(!previous.next) {
            return null;
        }

        previous.next = previous.next.next;

    }

    insertAt(data, index) {
        // edge case for no nodes
        if(!this.head) {
            return this.head = new Node(data)
        }
        
        if(index === 0) {
            // key is the 2nd argument to assign as new next value
            return this.head = new Node(data, this.head)
        }

        // for the last edge case - if this returns false, use the second
        let previous = this.getAt(index - 1) || this.getLast()
        // forms the connect of the new node inserted to the node after it
        let node = new Node(data, previous.next)
        
        // when we want to point the previous's next to the new node (both are needed)
        previous.next = node;    
    }

}


module.exports = { Node, LinkedList };
