var twoSum = function(nums, target) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
     let diff = target - nums[i];

     if (map.hasOwnProperty(diff)) {
      return [i, map[diff]];
     }

     map[nums[i]] = i;
    }
    return null;
};

console.log(twoSum([2,7,11,15],9));