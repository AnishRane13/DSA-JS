// https://leetcode.com/problems/longest-consecutive-sequence/

var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let maxLength = 0;

    for (let num of set) {
        if (!set.has(num - 1)) {   // start of sequence
            let length = 1;

            while (set.has(num + length)) {
                length++;
            }

            maxLength = Math.max(maxLength, length);
        }
    }

    return maxLength;
};

console.log(longestConsecutive([1,0,1,2]));