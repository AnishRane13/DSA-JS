class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}


class CircularLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertAtBeginning(data){
    let newNode = new Node(data);

    if (this.size === 0) {
        this.head = newNode;
        newNode.next = newNode;
        this.size++;
        return
    }

    let current = this.head;

    while (current.next !== this.head) {
        current = current.next
    }

    current.next = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  insertAtEnd(data){
    let newNode = new Node(data);

    if (this.head === null) {
        this.head = newNode;
        newNode.next = newNode;
        this.size++;
        return;
    }

     let current = this.head;

     while (current.next !== this.head) {
        current = current.next;
     }

     current.next = newNode;
     newNode.next = this.head;
     this.size++;
  }

  deleteFromBeginning(){
    if (this.head === null) {
        return console.log("List is empty")
    }
    if (this.head.next === this.head) {
        this.head = null;
        this.size = 0;
        return;
    }

    let current = this.head;
    while (current.next !== this.head) {
        current = current.next;
    }

    current.next = this.head.next;
    this.head = this.head.next;
    this.size--;
  }

  deleteFromEnd(){
     if (this.head === null) {
        return console.log("List is empty")
    }
    if (this.head.next === this.head) {
        this.head = null;
        this.size = 0;
        return;
    }

    let current = this.head;
    while (current.next.next !== this.head) {
      current = current.next;
    }

    current.next = this.head;
    this.size--;

  }


}


