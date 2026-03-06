var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let count = 0;
    let maxCount = 0;

    for(let i = 0; i < s.length; i++ ){
        if(set.has(s[i])){
        set.clear();
        count = 0;
        }
        set.add(s[i]);
        count++;
        maxCount = Math.max(count, maxCount)
    }
    return maxCount;
};

console.log(lengthOfLongestSubstring("bbbbbb"));