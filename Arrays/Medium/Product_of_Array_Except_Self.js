// https://leetcode.com/problems/product-of-array-except-self/description/

var productExceptSelf = function (nums) {
    const ans = [];
    let start = 1;

    for (let i = 0; i < nums.length; i++) {
        ans.push(start);
        start = start*nums[i];
    }

    let start2 = 1;
    
    for (let i = nums.length-1; i >= 0; i--) {
        ans[i] = start2*ans[i];
        start2 = start2*nums[i]
    }
    return ans
};

// var productExceptSelf = function (nums) {

//     let ans = [];
//     for (let i = 0; i < nums.length; i++) {
//         let start = 1;
//         for (let j = 0; j < nums.length; j++) {
//             if(i === j){
//                 continue
//             }else{
//             start = start * nums[j]
//             }
//         }
//     ans.push(start)
//     }
//     return ans
// };

console.log(productExceptSelf([-1, 1, 0, -3, 3]));
console.log(productExceptSelf([0, 0]));