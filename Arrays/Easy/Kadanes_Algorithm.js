// https://leetcode.com/problems/maximum-subarray/description/
var maxSubArray = function (nums) {
    let left = 0, right = 0, sum = 0, maxi = 0;

    while (right < nums.length) {
        sum += nums[right];
        maxi = Math.max(sum, maxi);

        if (sum < 0) {
            sum = 0
            left++;
        }
        right++
    }

    return maxi
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5,4,-1,7,8]));
