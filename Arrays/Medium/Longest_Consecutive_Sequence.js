// https://leetcode.com/problems/longest-consecutive-sequence/

var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let maxLength = 0;

   for(let n of set){
    if (!set.has(n-1)) {
        length = 1;

        while (set.has(n+length)) {
            length++;
        }
        maxLength = Math.max(maxLength, length);
    }

   }
   return maxLength;
};

console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));