class Stack {
  constructor() {
    this.items = [];
  }

  push(data) {
    this.items.push(data)
  }

  pop() {
    if (this.items.length === 0) {
      console.log("Stack is empty");
      return null;
    }
    return this.items.pop();
  }

  peek() {
    if (this.items.length === 0) {
      console.log("Stack is empty");
      return null;
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    if (this.items.length === 0) {
      return true
    }
    return false
  }

  size(){
    return this.items.length
  }

}

const s = new Stack();

console.log(s.isEmpty())
s.push(10);
s.push(20);
s.push(30);
s.pop()
console.log(s.peek())



console.log(s)
