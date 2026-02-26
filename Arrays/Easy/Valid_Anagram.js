// https://leetcode.com/problems/valid-anagram/

var isAnagram = function(s, t) {

    if (s.length !== t.length) return false;

    const map1 = new Map();

    // Step 1: Count characters of s
    for (let i = 0; i < s.length; i++) {
        map1.set(s[i], (map1.get(s[i]) || 0) + 1);
    }

    // Step 2: Reduce using t
    for (let i = 0; i < t.length; i++) {

        if (!map1.has(t[i]) || map1.get(t[i]) === 0) {
            return false;
        }

        map1.set(t[i], map1.get(t[i]) - 1);
    }

    return true;
};

console.log(isAnagram("anagram","nagaram")); // true
console.log(isAnagram("rat","car")); // false