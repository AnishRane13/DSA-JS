// https://leetcode.com/problems/valid-anagram/

var isAnagram = function(s, t) {

    if (s.length !== t.length) {
        return false
    }

    let sArr = s.split("")
    let tArr = t.split("")
    sArr.sort();
    tArr.sort();

    // console.log(sArr)
    // console.log(tArr)

   for (let i = 0; i < s.length; i++) {
     if (sArr[i] !== tArr[i]) {
         return false
     }
   }

   return true;
};

console.log(isAnagram("anagram","nagaram"));