// https://leetcode.com/problems/search-in-rotated-sorted-array/description/

var search = function(nums, target) {
    let low = nums[0], high = nums[nums.length-1]

    while (low <= high) {
        let mid = ((low+high)/2)
        if (nums[mid] === target) {
            return mid;
        }

        if (nums[low] <= nums[mid]) {
            if (nums[low]) {
                
            }
        }
    }
};

console.log(search([4,5,6,7,0,1,2],0))