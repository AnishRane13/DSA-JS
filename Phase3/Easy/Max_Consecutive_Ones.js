// https://leetcode.com/problems/max-consecutive-ones/


let findMaxConsecutiveOnes = function(nums) {
    let maxLen = 0;

    count = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 1){
            count++;
        }else{
            count = 0;
        }
        maxLen = Math.max(maxLen, count)
    }
    return maxLen;
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))