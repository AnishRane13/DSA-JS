// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let dummy = new ListNode(0, head);
  let slow = dummy;
  let fast = dummy;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  while (fast.next !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;

  return dummy.next
};


// Helper: create linked list from array
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

// Helper: print linked list
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

let arr = [1,2,3,4,5];
let n = 2;

let head = createLinkedList(arr);

console.log("Original List:");
printList(head);

let result = removeNthFromEnd(head, n);

console.log("After Removing Nth From End:");
printList(result);