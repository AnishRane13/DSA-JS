// https://leetcode.com/problems/valid-palindrome


var isPalindrome = function(s) {
    let str = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    let size = str.length - 1; 

    for (let i = 0; i < (size)/2; i++) {
        if (str[i] !== str[size-i]) {
            return false
        }
    }
    return true
};

console.log(isPalindrome("race a car"))