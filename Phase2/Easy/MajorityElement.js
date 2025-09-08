var majorityElement = function(nums) {
  let ElementCount = new Map();
  let highestCountElement = null;
  let highestCount = 0;

  for (let i = 0; i < nums.length; i++) {
    let currentCount = 0;
    if (ElementCount.has(nums[i])) {
        currentCount = ElementCount.get(nums[i]) + 1;
        ElementCount.set(nums[i], currentCount)
    }else{
        currentCount = 1;
        ElementCount.set(nums[i],currentCount);
    }
    if (currentCount > highestCount) {
        highestCount = currentCount;
        highestCountElement = nums[i];
    }
  }

    return highestCountElement;
};

console.log(majorityElement([2,2,1,1,1,2,2]))