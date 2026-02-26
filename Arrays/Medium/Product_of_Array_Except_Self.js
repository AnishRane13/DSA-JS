// https://leetcode.com/problems/product-of-array-except-self/


var productExceptSelf = function(nums) {
    const result = [];
    let multipliedValue = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            continue;
        }else{
             multipliedValue *=  nums[i];
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums.includes(0)) {
            if (nums[i] === 0) {
                result.push(multipliedValue);
            }else{
                result.push(0)
            }
        }else{
            result.push(multipliedValue/nums[i])
        }
    }
    // console.log(nums.includes(0))

    return result
};

console.log(productExceptSelf([-1,1,0,-3,3]))
console.log(productExceptSelf([0,0]))