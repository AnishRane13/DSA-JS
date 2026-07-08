var characterReplacement = function(s, k) {
    let maxFreq = 0, left = 0, longest = 0;
    
    let count = {};
    
    for(let right = 0; right < s.length; right++){
    	let char = s[right];
    	
    	count[char] = (count[char] || 0) + 1;
    	
    	maxFreq = Math.max(maxFreq, count[char])
    	
    	while((right-left+1) - maxFreq > k){
    	count[s[left]]--;
    	left++;
    	}
    	longest = Math.max(longest, right-left+1)
    }
    return longest;
};

console.log(characterReplacement("AABABBA", 1));
console.log(characterReplacement("ABAB", 2));