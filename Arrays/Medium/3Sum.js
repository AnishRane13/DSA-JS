// https://leetcode.com/problems/3sum/

// var threeSum = function(nums) {
//     let ans = new Set();

//     nums.sort((a, b) => a - b);
    
//     for (let i = 0; i < nums.length - 2; i++) {
//         let left = i + 1, right = nums.length - 1;

//         while (left < right) {
//             let sum = nums[i] + nums[left] + nums[right];

//             if (sum === 0) {
//                 ans.add(`${nums[i]},${nums[left]},${nums[right]}`);
//                 left++;
//                 right--;
//             } else if (sum < 0) {
//                 left++;
//             } else {
//                 right--;
//             }
//         }
//     }

//     return [...ans].map(str => str.split(',').map(Number));
// };


var threeSum = function(nums) {
   let ans = new Set();

   nums.sort((a, b) => a - b);

   for (let i = 0; i < nums.length - 1; i++) {
    let left = i + 1, right = nums.length - 1;

    while (left < right) {
        let sum = nums[i] + nums[left] + nums[right];

        if (sum === 0) {
            ans.add(`${nums[i]},${nums[left]},${nums[right]}`);
            left++;
            right--;
        } else if (sum < 0) {
            left++;
        } else {
            right--;
        }
    }   
   }
   return [...ans].map(str => str.split(',').map(Number));
};


console.log(threeSum([-1,0,1,2,-1,-4]));