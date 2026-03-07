// https://leetcode.com/problems/middle-of-the-linked-list/description/

// Definition for singly-linked list
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

// Solution
var middleNode = function(head) {
   let slow = head;
   let fast = head;

   while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next
   }
   return slow;
};


// Create Linked List: 1 -> 2 -> 3 -> 4 -> 5
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);


// Run the function
let result = middleNode(head);

console.log(result.val);