// var longestConsecutive = function(nums) {
//   const numSet = new Set(nums); // put all numbers in a set
//   let maxLen = 0;

//   for (const num of numSet) {
//     // only start counting if 'num - 1' doesn't exist
//     if (!numSet.has(num - 1)) {
//       let currentNum = num;
//       let streak = 1;

//       while (numSet.has(currentNum + 1)) {
//         currentNum++;
//         streak++;
//       }

//       maxLen = Math.max(maxLen, streak);
//     }
//   }

//   return maxLen;
// };

// // Test
// console.log(longestConsecutive([9,1,4,7,3,-1,0,5,8,-1,6])); 




var longestConsecutive = function(nums) {
const numSet = new Set(nums)
let maxLen = 0;

for (const num of numSet) {
   
    if (!numSet.has(num-1)) {
        let currentNum = num;
        let streak = 1;

        while (numSet.has(currentNum+1)) {
            currentNum++;
            streak++;
        }

        maxLen = Math.max(maxLen,streak);

    }
}
return maxLen;

};

// Test
console.log(longestConsecutive([9,1,4,7,3,-1,0,5,8,-1,6])); 
