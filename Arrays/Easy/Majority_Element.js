// https://leetcode.com/problems/majority-element/description/

var majorityElement = function(nums) {
    let elementCounts = new Map();
    let highestCount = 0;
    highestCountElement = null;

    for(const num of nums){
        let currentCount;

        if (elementCounts.has(num)) {
            currentCount = elementCounts.get(num) + 1;
            elementCounts.set(num, currentCount);
        }else{
            currentCount = 1;
            elementCounts.set(num,currentCount);
        }

        if (currentCount > highestCount) {
            highestCount = currentCount;
            highestCountElement = num;
        } 
    }

    return highestCountElement;
};

console.log(majorityElement([2,2,1,1,1,2,2]))