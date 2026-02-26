// https://leetcode.com/problems/merge-sorted-array/description/


var merge = function (nums1, m, nums2, n) {
 for (let i = 0; i < n; i++) {
      nums1[m + i] = nums2[i];   // fill from the extra space
   }

   return nums1.sort((a, b) => a - b); // numeric sort
};

console.log("Final Result:", merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
