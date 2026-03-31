function mostWater(nums) {
    let left = 0, right = nums.length - 1;
    let maxWater = 0;

    while (left < right) {
        maxWater = Math.max(maxWater, Math.min(nums[left],nums[right]) * (right - left));
        if (nums[left] <= nums[right]) {
            left++
        }else{
            right--;
        }
    }
    return maxWater
}

console.log(mostWater([1,8,6,2,5,4,8,3,7]))
console.log(mostWater([1,8,6,2,5,4,8,3,7]))
console.log(mostWater([1,1]))

