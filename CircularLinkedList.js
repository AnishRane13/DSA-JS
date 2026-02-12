// Node for Circular Linked List
class CircularNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Singly Circular Linked List
class CircularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;  // Keep reference to last node for efficiency
        this.size = 0;
    }

    isEmpty() {
        return this.head === null;
    }

    getSize() {
        return this.size;
    }

    // Display with cycle detection to avoid infinite loop
    display() {
        if (this.isEmpty()) {
            console.log('List is empty');
            return;
        }
        
        const values = [];
        let current = this.head;
        
        do {
            values.push(current.data);
            current = current.next;
        } while (current !== this.head);
        
        console.log(values.join(' -> ') + ' -> (back to ' + this.head.data + ')');
    }

    // Add at beginning
    prepend(data) {
        const newNode = new CircularNode(data);
        
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = newNode; // Point to itself
        } else {
            newNode.next = this.head;
            this.tail.next = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    // Add at end
    append(data) {
        const newNode = new CircularNode(data);
        
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = newNode; // Point to itself
        } else {
            newNode.next = this.head;
            this.tail.next = newNode;
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
        
        const newNode = new CircularNode(data);
        let current = this.head;
        
        // Traverse to position before insertion
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        
        newNode.next = current.next;
        current.next = newNode;
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
            this.tail.next = this.head.next;
            this.head = this.head.next;
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
            // Find second-to-last node
            let current = this.head;
            while (current.next !== this.tail) {
                current = current.next;
            }
            
            current.next = this.head;
            this.tail = current;
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
        
        let current = this.head;
        
        // Traverse to position before removal
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        
        const removedData = current.next.data;
        current.next = current.next.next;
        
        this.size--;
        return removedData;
    }

    // Find index of element
    indexOf(data) {
        if (this.isEmpty()) {
            return -1;
        }
        
        let current = this.head;
        let index = 0;
        
        do {
            if (current.data === data) {
                return index;
            }
            current = current.next;
            index++;
        } while (current !== this.head);
        
        return -1;
    }

    // Check if element exists
    contains(data) {
        return this.indexOf(data) !== -1;
    }

    // Get element at index
    get(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('Index out of bounds');
        }
        
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        
        return current.data;
    }

    // Convert to array (useful for testing)
    toArray() {
        if (this.isEmpty()) {
            return [];
        }
        
        const result = [];
        let current = this.head;
        
        do {
            result.push(current.data);
            current = current.next;
        } while (current !== this.head);
        
        return result;
    }

    // Split list at given index (advanced operation)
    splitAt(index) {
        if (index <= 0 || index >= this.size) {
            throw new Error('Invalid split index');
        }
        
        const secondList = new CircularLinkedList();
        let current = this.head;
        
        // Find split point
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        
        // Set up second list
        secondList.head = current.next;
        secondList.tail = this.tail;
        secondList.size = this.size - index;
        
        // Update first list
        current.next = this.head;
        this.tail = current;
        this.size = index;
        
        return secondList;
    }

    // Rotate list by k positions
    rotate(k) {
        if (this.isEmpty() || k === 0) return;
        
        k = k % this.size; // Handle k > size
        if (k === 0) return;
        
        // Find new head position
        let current = this.head;
        for (let i = 0; i < k; i++) {
            current = current.next;
        }
        
        this.head = current;
        
        // Find new tail (one position before new head)
        while (current.next !== this.head) {
            current = current.next;
        }
        this.tail = current;
    }
}

// Doubly Circular Linked List Node
class DoublyCircularNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

// Doubly Circular Linked List (brief implementation)
class DoublyCircularLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.head === null;
    }

    append(data) {
        const newNode = new DoublyCircularNode(data);
        
        if (this.isEmpty()) {
            this.head = newNode;
            newNode.next = newNode;
            newNode.prev = newNode;
        } else {
            const tail = this.head.prev;
            
            newNode.next = this.head;
            newNode.prev = tail;
            tail.next = newNode;
            this.head.prev = newNode;
        }
        this.size++;
    }

    display() {
        if (this.isEmpty()) {
            console.log('Doubly circular list is empty');
            return;
        }
        
        const values = [];
        let current = this.head;
        
        do {
            values.push(current.data);
            current = current.next;
        } while (current !== this.head);
        
        console.log('Doubly Circular: ' + values.join(' <-> ') + ' <-> (circular)');
    }
}

// Example Usage
console.log('=== Circular Linked List Demo ===');

const cList = new CircularLinkedList();

// Add elements
cList.append(10);
cList.append(20);
cList.append(30);
cList.prepend(5);

console.log('Size:', cList.getSize()); // 4
cList.display(); // 5 -> 10 -> 20 -> 30 -> (back to 5)

// Operations
console.log('Element at index 2:', cList.get(2)); // 20
console.log('Index of 30:', cList.indexOf(30));   // 3

// Rotation
console.log('\nAfter rotating by 2 positions:');
cList.rotate(2);
cList.display(); // 20 -> 30 -> 5 -> 10 -> (back to 20)

// Split operation
console.log('\nSplitting at index 2:');
const secondHalf = cList.splitAt(2);
console.log('First half:');
cList.display();     // 20 -> 30 -> (back to 20)
console.log('Second half:');
secondHalf.display(); // 5 -> 10 -> (back to 5)

console.log('\n=== Doubly Circular Demo ===');
const dcList = new DoublyCircularLinkedList();
dcList.append(100);
dcList.append(200);
dcList.append(300);
dcList.display(); // Doubly Circular: 100 <-> 200 <-> 300 <-> (circular)