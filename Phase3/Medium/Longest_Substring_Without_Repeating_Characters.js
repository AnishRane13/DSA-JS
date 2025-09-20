// https://leetcode.com/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = function (s) {
  const checkRepeat = new Set();
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    if (checkRepeat.has(s[i])) {
      checkRepeat.delete(s[i]);
    //   checkRepeat.clear();
        // checkRepeat.add(s[i]);
    }else{
        checkRepeat.add(s[i]);
    }

    maxLen = Math.max(maxLen, checkRepeat.size)
  }
  return maxLen;
};

// console.log(lengthOfLongestSubstring("abcabcbb"))   
// -- 3
// console.log(lengthOfLongestSubstring("bbbbb")) 
// -- 1
// console.log(lengthOfLongestSubstring("dvdf")) 
// -- 3
console.log(lengthOfLongestSubstring("pwwkew")) 
//  -- 3
