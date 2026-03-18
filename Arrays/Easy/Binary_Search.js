// https://leetcode.com/problems/binary-search/description/


var search = function (nums, target) {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (target === nums[mid]) {
            return mid;
        } else if (target < nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12]), 9);