// https://leetcode.com/problems/longest-palindromic-substring/description/

var longestPalindrome = function(s) {

    let length = s.length;
    
    for (let i = 0; i < (s.length-1); i++) {
        let left = 0;
        let right = length;
        let palindromic = false;
        while (left < right) {
            if(s[left] !== s[right]){
                palindromic = false;
            }else{
                palindromic = true
            }
            left++;
            right--;
        }
    }
};

console.log(longestPalindrome("babad"));