var maxSubArray = function (nums) {
  let sum = 0,
    maxi = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < nums.length; i++) {
    sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
    }
    if (sum < 0) {
      sum = 0;
    }
    maxi = Math.max(sum, maxi);
  }
  return maxi;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
