// https://leetcode.com/problems/maximum-average-subarray-i/description/

var findMaxAverage = function(nums, k) {
      let maxi = -Infinity;

    for (let i = 0; i <= nums.length-k; i++) {
        let sum = 0;
        // let j = i;
      for (let j = i; j < i + k; j++) {
          sum += nums[j];
      }
      let avg = sum/k;
        maxi = Math.max(maxi, avg);
    }
    return maxi;
};

console.log(findMaxAverage([1,12,-5,-6,50,3],4))