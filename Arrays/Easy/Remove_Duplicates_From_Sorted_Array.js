// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

var removeDuplicates = (nums) => {
  let i = 0

  for (let j = 0; j < nums.length; j++) {
      if (nums[i] !== nums[j]) {
        i++;
        nums[i] = nums[i+1]
      }
  }
  return i+1;
}

console.log(removeDuplicates([1, 1, 2]))
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))