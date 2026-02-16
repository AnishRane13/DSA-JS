class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(data) {
        this.items.push(data);
    }

    dequeue() {
        if (this.items.length === 0) {
            console.log("Queue is empty");
            return null;
        }
        return this.items.shift();
    }

    peek(){
        if (this.items.length === 0) {
            console.log("Queue is empty");
            return null;
        }
        return this.items[0];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }
}
