// DoublyLinkedList Node - has both next and prev pointers
class DoublyNode {
    constructor(data) {
        this.data = data;
        this.next = null;      // Points to next node
        this.prev = null;      // Points to previous node
    }
}

// DoublyLinkedList Class
class DoublyLinkedList {
    constructor() {
        this.head = null;      // Points to first node
        this.tail = null;      // Points to last node (optimization)
        this.size = 0;
    }

    // Check if list is empty
    isEmpty() {
        return this.head === null;
    }

    // Get size
    getSize() {
        return this.size;
    }

    // Display list forward
    displayForward() {
        if (this.isEmpty()) {
            console.log('List is empty');
            return;
        }
        
        let current = this.head;
        const values = [];
        
        while (current !== null) {
            values.push(current.data);
            current = current.next;
        }
        
        console.log('Forward: ' + values.join(' <-> '));
    }

    // Display list backward
    displayBackward() {
        if (this.isEmpty()) {
            console.log('List is empty');
            return;
        }
        
        let current = this.tail;
        const values = [];
        
        while (current !== null) {
            values.push(current.data);
            current = current.prev;
        }
        
        console.log('Backward: ' + values.join(' <-> '));
    }

    // Add at beginning
    prepend(data) {
        const newNode = new DoublyNode(data);
        
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    // Add at end
    append(data) {
        const newNode = new DoublyNode(data);
        
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;
    }

    // Insert at specific index
    insert(index, data) {
        if (index < 0 || index > this.size) {
            throw new Error('Index out of bounds');
        }
        
        if (index === 0) {
            this.prepend(data);
            return;
        }
        
        if (index === this.size) {
            this.append(data);
            return;
        }
        
        const newNode = new DoublyNode(data);
        let current;
        
        // Optimization: traverse from head or tail based on index
        if (index <= this.size / 2) {
            // Traverse from head
            current = this.head;
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
        } else {
            // Traverse from tail
            current = this.tail;
            for (let i = this.size - 1; i > index; i--) {
                current = current.prev;
            }
        }
        
        // Insert before current
        newNode.next = current;
        newNode.prev = current.prev;
        current.prev.next = newNode;
        current.prev = newNode;
        this.size++;
    }

    // Remove first element
    removeFirst() {
        if (this.isEmpty()) {
            return null;
        }
        
        const removedData = this.head.data;
        
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        
        this.size--;
        return removedData;
    }

    // Remove last element
    removeLast() {
        if (this.isEmpty()) {
            return null;
        }
        
        const removedData = this.tail.data;
        
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        
        this.size--;
        return removedData;
    }

    // Remove at specific index
    removeAt(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('Index out of bounds');
        }
        
        if (index === 0) {
            return this.removeFirst();
        }
        
        if (index === this.size - 1) {
            return this.removeLast();
        }
        
        let current;
        
        // Optimization: traverse from head or tail
        if (index <= this.size / 2) {
            current = this.head;
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
        } else {
            current = this.tail;
            for (let i = this.size - 1; i > index; i--) {
                current = current.prev;
            }
        }
        
        const removedData = current.data;
        
        // Update connections
        current.prev.next = current.next;
        current.next.prev = current.prev;
        
        this.size--;
        return removedData;
    }

    // Find index of element
    indexOf(data) {
        let current = this.head;
        let index = 0;
        
        while (current !== null) {
            if (current.data === data) {
                return index;
            }
            current = current.next;
            index++;
        }
        
        return -1;
    }

    // Find last index of element (search from tail)
    lastIndexOf(data) {
        let current = this.tail;
        let index = this.size - 1;
        
        while (current !== null) {
            if (current.data === data) {
                return index;
            }
            current = current.prev;
            index--;
        }
        
        return -1;
    }

    // Get element at index
    get(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('Index out of bounds');
        }
        
        let current;
        
        // Optimization: choose direction based on index
        if (index <= this.size / 2) {
            current = this.head;
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
        } else {
            current = this.tail;
            for (let i = this.size - 1; i > index; i--) {
                current = current.prev;
            }
        }
        
        return current.data;
    }

    // Convert to array
    toArray() {
        const result = [];
        let current = this.head;
        
        while (current !== null) {
            result.push(current.data);
            current = current.next;
        }
        
        return result;
    }

    // Reverse the list
    reverse() {
        if (this.size <= 1) return;
        
        let current = this.head;
        
        // Swap head and tail
        [this.head, this.tail] = [this.tail, this.head];
        
        // Swap next and prev pointers for all nodes
        while (current !== null) {
            [current.next, current.prev] = [current.prev, current.next];
            current = current.prev; // Move to next (which is now prev)
        }
    }
}

// Example Usage
console.log('=== Doubly Linked List Demo ===');

const dList = new DoublyLinkedList();

// Add elements
dList.append(10);
dList.append(20);
dList.prepend(5);
dList.insert(2, 15);

console.log('Size:', dList.getSize()); // 4
dList.displayForward();  // Forward: 5 <-> 10 <-> 15 <-> 20
dList.displayBackward(); // Backward: 20 <-> 15 <-> 10 <-> 5

// Access elements
console.log('Element at index 1:', dList.get(1)); // 10
console.log('Index of 15:', dList.indexOf(15));   // 2

// Remove elements
console.log('Removed first:', dList.removeFirst()); // 5
console.log('Removed at index 1:', dList.removeAt(1)); // 15
dList.displayForward(); // Forward: 10 <-> 20

// Reverse
dList.append(30);
dList.append(40);
dList.displayForward(); // Forward: 10 <-> 20 <-> 30 <-> 40
dList.reverse();
dList.displayForward(); // Forward: 40 <-> 30 <-> 20 <-> 10

console.log('Array representation:', dList.toArray()); // [40, 30, 20, 10]