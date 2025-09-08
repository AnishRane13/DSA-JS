var twoSum = function(nums, target) {
    const check = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (check.has(complement)) {
            return [check.get(complement),i]
        }
        check.set(nums[i],i)
    }
};

console.log(twoSum([2,7,11,15],9))