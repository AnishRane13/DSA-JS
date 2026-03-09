// https://leetcode.com/problems/delete-node-in-a-linked-list/description/

// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} node
 * @return {void}
 */
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};

// Helper: create linked list
function createLinkedList(arr) {
    let head = new ListNode(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    return head;
}

// Helper: find node by value
function findNode(head, value) {
    let current = head;

    while (current !== null) {
        if (current.val === value) {
            return current;
        }
        current = current.next;
    }

    return null;
}

// Helper: print list
function printList(head) {
    let current = head;
    let result = [];

    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }

    console.log(result.join(" -> "));
}


// ===== TEST RUN =====

let arr = [4,5,1,9];
let head = createLinkedList(arr);

console.log("Original List:");
printList(head);

// Node we want to delete
let node = findNode(head, 5);

deleteNode(node);

console.log("After Deletion:");
printList(head);