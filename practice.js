function maxSubArray(nums) {
    let sum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        sum = Math.max(nums[i], sum + nums[i]);
        maxSum = Math.max(maxSum, sum);
    }

    return maxSum;
}

console.log(MaxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(MaxSubArray([5,4,-1,7,8]))
console.log(MaxSubArray([-1,-2,-3,-4]))
console.log(MaxSubArray([2,-1,2,3,4,-5]))
console.log(MaxSubArray([-2,1]))
// console.log(MaxSubArray([5,4,-1,7,8]))