/**
 * Two Pointers Technique - Common Patterns & Examples
 * See readme.md in this folder for a full explanation.
 */

// ============================================================
// Pattern 1: Opposite ends (left & right pointers)
// Use when: sorted array, palindromes, pair with target sum
// ============================================================

/**
 * Two Sum II - Input array is sorted
 * Find two numbers that add up to target. Return 1-based indices.
 */
function twoSumSorted(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) return [left + 1, right + 1];
    if (sum < target) left++;
    else right--;
  }
  return [];
}

/**
 * Check if a string is a palindrome
 */
function isPalindrome(s) {
  const cleaned = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let left = 0;
  let right = cleaned.length - 1;

  while (left < right) {
    if (cleaned[left] !== cleaned[right]) return false;
    left++;
    right--;
  }
  return true;
}

// ============================================================
// Pattern 2: Same direction (fast & slow / read & write)
// Use when: in-place removal, partitioning, one pass
// ============================================================

/**
 * Remove duplicates from sorted array in-place (return new length)
 */
function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  let write = 1;

  for (let read = 1; read < nums.length; read++) {
    if (nums[read] !== nums[write - 1]) {
      nums[write] = nums[read];
      write++;
    }
  }
  return write;
}

/**
 * Move all zeros to the end (in-place)
 */
function moveZeroes(nums) {
  let write = 0;

  for (let read = 0; read < nums.length; read++) {
    if (nums[read] !== 0) {
      nums[write] = nums[read];
      write++;
    }
  }
  for (let i = write; i < nums.length; i++) {
    nums[i] = 0;
  }
}

// ============================================================
// Run examples
// ============================================================
console.log("Two Sum (sorted):", twoSumSorted([2, 7, 11, 15], 9));
console.log("Is Palindrome:", isPalindrome("A man, a plan, a canal: Panama"));
console.log("Remove Duplicates:", removeDuplicates([1, 1, 2, 2, 3]));
const zeros = [0, 1, 0, 3, 12];
moveZeroes(zeros);
console.log("Move Zeroes:", zeros);
