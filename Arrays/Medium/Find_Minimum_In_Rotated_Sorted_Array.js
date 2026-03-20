// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/

var findMin = function(nums) {
    let low = 0, high = nums.length - 1;

    while (low < high) {
        let mid = Math.floor((low + high)/2);

        if (nums[mid] < nums[high]) {
            high = mid;
        }else{
            low = mid + 1;
        }
    }
    return nums[low]
};

console.log(findMin([4,5,6,7,0,1,2]));
console.log(findMin([3,4,5,1,2]));