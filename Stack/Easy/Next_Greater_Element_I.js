// https://leetcode.com/problems/next-greater-element-i/

var nextGreaterElement = function(nums1, nums2) {
    const res = [];

    for (let i = 0; i < nums1.length; i++) {
        let index = nums2.indexOf(nums1[i]);
        let found = false;
        for (let j = index + 1; j < nums2.length; j++) {
            if (nums1[i] < nums2[j]) {
                res.push(nums2[j]);
                found = true
                break;
            }
        }
        if (found === false) {
            res.push(-1);
        }
    }
    return res
};

console.log(nextGreaterElement([4,1,2],[1,3,4,2]))
console.log(nextGreaterElement([2,4],[1,2,3,4]))