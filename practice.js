/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    const map = new Map();

    for(let num of nums){
        map.set(num, (map.get(num) || 0) + 1);
    }

    let index = 0;

    for (let i = 0; i < (map.get(0) || 0); i++) {
    nums[index++] = 0;
    }

      for (let i = 0; i < (map.get(1) || 0); i++) {
    nums[index++] = 1;
    }

      for (let i = 0; i < (map.get(2) || 0); i++) {
    nums[index++] = 2;
    }
    return nums
};

console.log(sortColors([2, 0, 1]));