// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

var lengthOfLongestSubstring = function(s) {
   const set = new Set();
   let left = 0;
   let maxLength = 0;
    
   for (let i = 0; i < s.length; i++) {
        while (set.has(s[i])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[i]);
        maxLength = Math.max(maxLength, i - left + 1)
   }
   return maxLength
};

console.log(lengthOfLongestSubstring("dvdf"));