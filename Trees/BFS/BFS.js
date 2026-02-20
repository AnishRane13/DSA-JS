class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const breadthFirstValues = (root) => {
    if (root === null) {
        return [];
    }
    
    const queue = [root];
    const values = [];

    while (queue.length > 0) {
        const current = queue.shift();
        values.push(current.val);

        if (current.left !== null) {
            queue.push(current.left)
        }
        if (current.right !== null) {
            queue.push(current.right)
        }
    }
    return values;
};

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');


a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(breadthFirstValues(a))

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f