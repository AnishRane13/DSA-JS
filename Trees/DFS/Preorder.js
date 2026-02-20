class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// const depthFirstValues = (root) =>{
//     const values = [];
//     const stack = [root]

//     if (root === null) {
//         return [];
//     }

//     while (stack.length > 0) {
//         const node = stack.pop();
//         values.push(node.val);

//         if (node.right !== null) {
//             stack.push(node.right)
//         }

//            if (node.left !== null) {
//             stack.push(node.left)
//         }
//     }

//     return values;
// }

const depthFirstValues = (root) => {
    console.log("Starting DFS Traversal...");

    if (root === null) {
        console.log("Tree is empty.");
        return [];
    }

    const values = [];
    const stack = [root];

    console.log("Initial Stack:", stack.map(node => node.val));

    while (stack.length > 0) {
        console.log("\n---------------------------");
        console.log("Current Stack:", stack.map(node => node.val));

        const node = stack.pop();
        console.log("Popped Node:", node.val);

        values.push(node.val);
        console.log("Values so far:", values);

        if (node.right !== null) {
            stack.push(node.right);
            console.log("Pushed RIGHT child:", node.right.val);
        }

        if (node.left !== null) {
            stack.push(node.left);
            console.log("Pushed LEFT child:", node.left.val);
        }

        console.log("Stack after pushing children:", stack.map(node => node.val));
    }

    console.log("\nDFS Completed.");
    console.log("Final DFS Order:", values);

    return values;
};


// const depthFirstValues = (root) => {
//     if (root === null) {
//         return [];
//     }

//     const leftValues = depthFirstValues(root.left)
//     const rightValues = depthFirstValues(root.right)
//     return [root.val, ...leftValues, ...rightValues];
// }

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

console.log(depthFirstValues(a))

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f


// [ 'a', 'b', 'd', 'e', 'c', 'f' ]