class Node{
  constructor(data){
      this.data = data;
      this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null
    this.size = 0
  }

  insertAtBeginning(data){
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  insertAtEnd(data){
    if (this.head == null) {
      const newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
      return
    }

    const newNode = new Node(data);
    let current = this.head;

    while (current.next !== null) {
      current = current.next
    }

    current.next = newNode
    this.size++;
  }

  deleteFromBeginning(){
    if (this.head == null) {
      return console.log("List is empty");
    }else{
      this.head = this.head.next;
      this.size--;
      return
    }
  }

  deleteFromEnd(){
    if (this.head == null) {
      return console.log("list is empty");
    }

    if (!this.head.next) {
      this.head = null;
      this.size--;
      return
    }

    let current = this.head
    while (current.next.next) {
      current = current.next
    }

    current.next = null;
    this.size--;
    return
  }

  search(data){
    let current = this.head;

    while (current !== null) {
      if (current.data === data) {
        return true;
      }
      current = current.next
    }
    return false;
  }

  reverse(){
    let prev = null;
    let current = this.head

    while (current) {
       const next = current.next; // store next
  current.next = prev;       // reverse link
  prev = current;            // move prev forward
  current = next;            // move current forward
    }
    this.head = prev;
  }

  findMiddle(){
    if (this.head === null) {
        return null
    }

    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow.data
  }
}

const list = new LinkedList();

list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtEnd(30);
list.search(20); // true
list.search(100); // false


console.log(list.head.data);               // 10
console.log(list.head.next.data);          // 20
console.log(list.head.next.next.data);     // 30
console.log(list.size);                    // 3
