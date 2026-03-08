// https://leetcode.com/problems/reverse-linked-list/description/

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let current = head;

    while (current !== null) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next
    }
    return prev
};


// Helper function to create linked list from array
function createLinkedList(arr) {
    if (arr.length === 0) return null;

    let head = new ListNode(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    return head;
}

// Helper function to print linked list
function printList(head) {
    let current = head;
    let result = [];

    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }

    console.log(result.join(" -> "));
}


// ===== RUN TEST =====

let arr = [1,2,3,4,5];

let head = createLinkedList(arr);

console.log("Original List:");
printList(head);

let reversed = reverseList(head);

console.log("After Reverse:");
printList(reversed);