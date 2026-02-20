class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const treeSum = (root) => {
    if (root === null) {
    }
    const queue = [ root];
    let sum = 0;
    while (queue.length > 0) {
        let node = queue.shift();
        sum += node.val;

        if (node.left !== null) {
            queue.push(node.left)
        }
          if (node.right !== null) {
            queue.push(node.right)
        }
    }
    return sum;
};

// const treeSum = (root) => {
//     if (root === null) {
//         return false
//     }

//     return root.val + treeSum(root.left) + treeSum(root.right) 
// }

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);


a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(treeSum(a))

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f