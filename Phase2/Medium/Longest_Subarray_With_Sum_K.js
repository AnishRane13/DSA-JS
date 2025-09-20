// https://takeuforward.org/plus/dsa/hashing/faqs/longest-subarray-with-sum-k


   //  function longestSubarray(nums, k) {
   //     let maxLen = 0;

   //     for (let i = 0; i < nums.length; i++) {
   //      let sum = 0;
   //      for (let j = i; j < nums.length; j++) {
   //       sum += nums[j];
   //       if (sum === k) {
   //            let len = j - i + 1;
   //          maxLen = Math.max(maxLen, len);
   //          // maxLen = Math.max(maxLen, j-i+1);
   //       }
   //      }
   //     }
   //     return maxLen;
   //  }

    function longestSubarray(nums, k) {
     let maxLen = 0, r = 0, l = 0, sum = 0;

     while (r < nums.length) {
      while (l <= r) {
         if (sum > k) {
            sum -= nums[l]
            l++;
         }
      }
      if (sum == k) {
         maxLen = Math.max(maxLen, r-l+1);
      }
      r++;
      if (r < n) {
         sum = sum + nums[r]
      }
     }
    }

//    console.log("Result:", longestSubarray([10, 5, 2, 7, 1, 9], 15)); // Expected: 4 ([5,2,7,1])
// console.log("Result:", longestSubarray([-3, 2, 1], 6));           // Expected: 0 (no subarray)
// console.log("Result:", longestSubarray([-1, 1, 1], 1));           // Expected: 3 ([1,1])
console.log("Result:", longestSubarray([1, 2, 3, 4, 5], 9));      // Expected: 2 ([4,5])
console.log("Result:", longestSubarray([1, -1, 5, -2, 3], 3));    // Expected: 4 ([1,-1,5,-2])
// console.log("Result:", longestSubarray([2, 2, 2, 2], 4));         // Expected: 2 ([2,2])
// console.log("Result:", longestSubarray([5], 5));                  // Expected: 1 ([5])
// console.log("Result:", longestSubarray([1,2,3], 6));              // Expected: 3 ([1,2,3])





[1, -1, 5, -2, 3], k = 3

function longestSubarray(nums, k) {
  let prefixSum = 0;
  let map = new Map(); // stores first index of each prefixSum
  let maxLen = 0;

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];

    if (prefixSum === k) {
      maxLen = i + 1; // whole subarray from start
    }

    if (!map.has(prefixSum)) {
      map.set(prefixSum, i);
    }

    if (map.has(prefixSum - k)) {
      maxLen = Math.max(maxLen, i - map.get(prefixSum - k));
    }
  }

  return maxLen;
}

// Tests
console.log("Result:", longestSubarray([10, 5, 2, 7, 1, 9], 15)); // 4 ([5,2,7,1])
console.log("Result:", longestSubarray([-3, 2, 1], 6));           // 0
console.log("Result:", longestSubarray([-1, 1, 1], 1));           // 3
console.log("Result:", longestSubarray([1, 2, 3, 4, 5], 9));      // 2 ([4,5])
console.log("Result:", longestSubarray([1, -1, 5, -2, 3], 3));    // 4 ([1,-1,5,-2])
console.log("Result:", longestSubarray([2, 2, 2, 2], 4));         // 2
console.log("Result:", longestSubarray([5], 5));                  // 1
console.log("Result:", longestSubarray([1,2,3], 6));              // 3
