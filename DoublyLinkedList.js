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
}

const node1 = new Node(10);

console.log(node1.data); // 10
console.log(node1.next); // null
console.log(node1.prev); // null


