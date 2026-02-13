class Node{
    constructor(data){
        this.data = data
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    insertAtBeginning(data){
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode
            this.size++;
            return
        }

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.size++;
    }

    insertAtEnd(data){
        const newNode = new Node(data)

        if (this.head === null) {
            this.head = newNode;
            this.size++;
            return
        }

        let current = this.head;

        while (current.next !== null) {
            current = current.next;
        }

        current.next = newNode;
        newNode.prev = current;
        this.size++;
    }

    deleteFromBeginning(){
        if (this.size === 0) {
            return false;
        }
        if (this.head.next === null) {
            this.head = null;
            this.size--;
            return;
        }

        this.head = this.head.next;
        this.head.prev = null;
        this.size--;
    }

    deleteFromEnd(){
        if (this.head === null) {
            return false;
        }
        if (this.head.next === null) {
            this.head = null;
            this.size--;
            return;
        }
        
        let current = this.head;
        while (current.next.next !== null) {
            current = current.next;
        }

        current.next = null;
        this.size--;

    }
}

const node1 = new Node(10);

console.log(node1.data); // 10
console.log(node1.next); // null
console.log(node1.prev); // null

