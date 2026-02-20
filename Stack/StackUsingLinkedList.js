class Stack {
  constructor(){
    this.head = null;
    this.length = 0;
  }

  push(data){
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  pop(){
    if (this.head === null) {
      console.log("Stack is empty");
      return null;
    }

    const removedData = this.head.data;
    this.head = this.head.next;
    this.length--;

    return removedData;
  }

  peek(){
    if (this.head === null) {
      console.log("Stack is empty");
      return null;
    }
    return this.head.data;
  }

  isEmpty(){
    return this.head === null;
  }

  size(){
    return this.length;
  }
}
