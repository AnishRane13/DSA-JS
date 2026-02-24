var sortColors = function (nums) {
    const map = new Map();

    // Count frequency
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    let index = 0;

    // Fill 0s
    for (let i = 0; i < (map.get(0) || 0); i++) {
        nums[index++] = 0;
    }

    // Fill 1s
    for (let i = 0; i < (map.get(1) || 0); i++) {
        nums[index++] = 1;
    }

    // Fill 2s
    for (let i = 0; i < (map.get(2) || 0); i++) {
        nums[index++] = 2;
    }

    return nums;
};

console.log(sortColors([2, 0, 1]));