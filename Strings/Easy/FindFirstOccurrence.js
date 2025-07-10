// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

var strStr = function (haystack, needle) {
  for (let i = 0; i < haystack.length - (needle.length - 1); i++) {
    let counter = 0;
    if (haystack[i] === needle[0]) {
      for (let j = 0; j < needle.length; j++) {
        //    console.log(haystack[i+j],"+ " ,needle[j])
        if (haystack[i + j] === needle[j]) {
          counter++;
        }
      }
      if (counter === needle.length) {
        return i;
      }
    }
  }
  return -1;
};

console.log(strStr("leetcode", "leeto"));
// console.log(strStr("sadbutsad","sad"))
