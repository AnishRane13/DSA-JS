class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    enqueue(data) {
        let newNode = new Node(data);

        if (this.front === null) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }

        this.length++;
    }

    dequeue(){
    if (this.front === null) {
        console.log("Queue is empty");
        return null;
    }

    let removedData = this.front.data;

    this.front = this.front.next;

    // If queue becomes empty
    if (this.front === null) {
        this.rear = null;
    }

    this.length--;

    return removedData;
}


}

