// Node Class - The building block of linked list
class Node {
    constructor(data) {
        this.data = data;      // Stores the actual value
        this.next = null;      // Points to the next node (initially null)
    }
}

// LinkedList Class - Manages the entire list
class LinkedList {
    constructor() {
        this.head = null;      // Points to the first node
        this.size = 0;         // Keeps track of list size
    }

    // Method to check if list is empty
    isEmpty() {
        return this.head === null;
    }

    // Method to get the size of the list
    getSize() {
        return this.size;
    }

    // Method to display the entire list
    display() {
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
        
        console.log(values.join(' -> '));
    }

    // Method to prepend (add at beginning)
    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    // Method to append (add at end)
    append(data) {
        const newNode = new Node(data);
        
        if (this.isEmpty()) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    // Method to insert at specific index
    insert(index, data) {
        // Edge case: invalid index
        if (index < 0 || index > this.size) {
            throw new Error('Index out of bounds');
        }
        
        // Edge case: insert at beginning
        if (index === 0) {
            this.prepend(data);
            return;
        }
        
        const newNode = new Node(data);
        let current = this.head;
        
        // Traverse to the position before insertion point
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        
        newNode.next = current.next;
        current.next = newNode;
        this.size++;
    }

    // Method to remove from beginning
    removeFirst() {
        if (this.isEmpty()) {
            return null;
        }
        
        const removedData = this.head.data;
        this.head = this.head.next;
        this.size--;
        return removedData;
    }

    // Method to remove from end
    removeLast() {
        if (this.isEmpty()) {
            return null;
        }
        
        // Edge case: only one node
        if (this.head.next === null) {
            const removedData = this.head.data;
            this.head = null;
            this.size--;
            return removedData;
        }
        
        // Find second-to-last node
        let current = this.head;
        while (current.next.next !== null) {
            current = current.next;
        }
        
        const removedData = current.next.data;
        current.next = null;
        this.size--;
        return removedData;
    }

    // Method to remove at specific index
    removeAt(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('Index out of bounds');
        }
        
        // Edge case: remove first element
        if (index === 0) {
            return this.removeFirst();
        }
        
        let current = this.head;
        
        // Traverse to the position before removal point
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        
        const removedData = current.next.data;
        current.next = current.next.next;
        this.size--;
        return removedData;
    }

    // Method to find a value and return its index
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
        
        return -1; // Not found
    }

    // Method to check if a value exists
    contains(data) {
        return this.indexOf(data) !== -1;
    }
}

// Example Usage and Testing
console.log('=== Linked List Demo ===');

const list = new LinkedList();

// Test empty list
console.log('Empty list:', list.isEmpty()); // true
list.display(); // "List is empty"

// Add elements
list.append(10);
list.append(20);
list.prepend(5);
list.display(); // "5 -> 10 -> 20"

// Insert at specific position
list.insert(1, 7);
list.display(); // "5 -> 7 -> 10 -> 20"

// Remove elements
console.log('Removed first:', list.removeFirst()); // 5
console.log('Removed last:', list.removeLast());   // 20
list.display(); // "7 -> 10"

// Search operations
console.log('Index of 10:', list.indexOf(10)); // 1
console.log('Contains 7:', list.contains(7));   // true
console.log('Size:', list.getSize());           // 2