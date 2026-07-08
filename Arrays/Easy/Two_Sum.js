// https://leetcode.com/problems/two-sum/description/

var twoSum = (nums, target) =>{
  const map = new Map();
   
   for(let i = 0; i < nums.length; i++){
    let diff = target - nums[i];
    if (map.hasOwnProperty(diff)) {
        return [i, map[diff]];
    }
    map[nums[i]] = i;
   }
   return null;
}

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));