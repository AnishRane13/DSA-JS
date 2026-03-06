# Two Pointers Technique — Deep Dive

The **Two Pointers** technique is a fundamental strategy in array and string problems. It uses two indices (pointers) that traverse the data structure—often in a single pass—to achieve **O(n)** time and **O(1)** extra space, avoiding nested loops or extra arrays.

---

## Table of Contents

1. [What Is the Two Pointers Technique?](#what-is-the-two-pointers-technique)
2. [Why Use It?](#why-use-it)
3. [When to Use It](#when-to-use-it)
4. [Pattern 1: Opposite Ends (Converging Pointers)](#pattern-1-opposite-ends-converging-pointers)
5. [Pattern 2: Same Direction (Read/Write or Fast/Slow)](#pattern-2-same-direction-readwrite-or-fastslow)
6. [How to Apply It Step by Step](#how-to-apply-it-step-by-step)
7. [Common Pitfalls](#common-pitfalls)
8. [Example Problems](#example-problems)
9. [Code Reference](#code-reference)

---

## What Is the Two Pointers Technique?

You maintain **two indices** (left/right, start/end, read/write, slow/fast) that move through an array or string according to clear rules. The key idea:

- **No brute force:** Instead of checking every pair with two nested loops (O(n²)), you move pointers based on the current values so that each element is visited a constant number of times → **O(n)**.
- **Often in-place:** Many two-pointer solutions write back into the same array, so extra space is **O(1)**.

The two main patterns are:

1. **Opposite ends** — One pointer at the start, one at the end; they move toward each other.
2. **Same direction** — Both move forward (or both backward), usually with different roles (e.g. one “reads”, one “writes”).

---

## Why Use It?

| Without two pointers (naive)     | With two pointers              |
|----------------------------------|---------------------------------|
| Nested loops → O(n²) time        | Single (or linear) pass → O(n)  |
| Extra array for “filtered” data  | In-place updates → O(1) space   |
| Multiple passes over the array   | One or two passes               |

**Example:** Finding two numbers in a **sorted** array that sum to a target.

- **Naive:** For each index `i`, loop over `j > i` and check `arr[i] + arr[j] == target`. Time O(n²), space O(1).
- **Two pointers:** `left = 0`, `right = n - 1`. If `arr[left] + arr[right] > target`, decrease `right` (sum must get smaller). If sum < target, increase `left` (sum must get larger). Each step rules out many possibilities at once → O(n) time, O(1) space.

---

## When to Use It

Use two pointers when you see:

- **Sorted array or string** — Order lets you “steer” by moving one pointer (e.g. increase sum vs decrease sum).
- **In-place requirement** — “Do not use extra array”, “modify in place”, “O(1) space”.
- **Pair or triple with a condition** — Two sum, three sum, valid triplet, etc.
- **Palindrome or symmetric structure** — Compare from both ends.
- **Partitioning / grouping** — Move certain elements to one side (zeros, evens, etc.) in one pass.
- **Remove duplicates in sorted data** — One pointer reads, one writes the “next unique” position.

If the array is **not** sorted, sometimes sorting first (O(n log n)) and then using two pointers is still better than a naive O(n²) solution.

---

## Pattern 1: Opposite Ends (Converging Pointers)

### Idea

- **Left pointer** `left` starts at index `0`.
- **Right pointer** `right` starts at index `length - 1`.
- In each step, you compare or combine values at `left` and `right`, then either move `left` forward or `right` backward (or both), so they **converge** until `left >= right`.

Because the data is often sorted, moving one pointer changes the sum/result in a predictable way, so you can safely skip many combinations without checking them.

### When to Use This Pattern

- Sorted array: find pair with target sum/difference/product.
- Palindrome: compare characters at both ends.
- Container with most water, trapping rain water (width × height style).
- 3Sum / 4Sum: fix one (or two) index, then two pointers on the rest.

### Loop Structure

```text
left = 0, right = length - 1
while left < right:
    do something with arr[left] and arr[right]
    decide: left++, or right--, or both
```

### Worked Example: Two Sum in Sorted Array

**Problem:** In a sorted array, find two numbers that add up to `target`. Return 1-based indices.

**Setup:** `left = 0`, `right = n - 1`.

**Logic:**

- If `arr[left] + arr[right] == target` → answer found.
- If sum **>** target → any pair using `arr[right]` and a value at `left' < right` would also have sum ≥ current sum (array is sorted). So we can discard `right` and do `right--`.
- If sum **<** target → any pair using `arr[left]` and a value at `right' > left` would also have sum ≤ current sum. So we can discard `left` and do `left++`.

**Trace:** `[2, 7, 11, 15]`, target `9`.

```text
Step 1: left=0, right=3 → 2+15=17 > 9 → right=2
Step 2: left=0, right=2 → 2+11=13 > 9 → right=1
Step 3: left=0, right=1 → 2+7=9  → return [1, 2] (1-based)
```

**Time:** O(n). **Space:** O(1).

### Worked Example: Valid Palindrome

**Problem:** Check if a string is a palindrome (ignoring non-alphanumeric, case-insensitive).

**Setup:** Clean or consider only alphanumeric; then `left = 0`, `right = length - 1`.

**Logic:** If `s[left] != s[right]`, return false. Otherwise `left++`, `right--`. Stop when `left >= right`.

**Why it works:** A palindrome reads the same from both ends. Comparing from both ends in one pass is enough; no need to build a reversed string.

**Time:** O(n). **Space:** O(1) if you don’t build a new string (you can compare in place with two pointers on the original string with a helper that “skips” non-alphanumeric).

---

## Pattern 2: Same Direction (Read/Write or Fast/Slow)

### Idea

Two pointers both move **in the same direction** (usually left to right):

- **Read pointer (fast):** Scans every element.
- **Write pointer (slow):** Index where we place the “next” valid element for the result.

Invariant: Everything to the **left** of the write pointer is already “done” (e.g. no duplicates, no zeros at the start). The read pointer explores ahead and decides what to keep.

### When to Use This Pattern

- Remove duplicates from sorted array in-place.
- Move all zeros (or all X) to the end.
- Remove all occurrences of a value in-place.
- “At most K duplicates” type problems.
- Partitioning (e.g. Dutch National Flag / Sort Colors) often uses multiple pointers in the same direction.

### Loop Structure

```text
write = 0 (or 1, depending on problem)
for read = 0 to length-1:
    if arr[read] is “valid” / should be kept:
        arr[write] = arr[read]
        write++
```

### Worked Example: Remove Duplicates from Sorted Array

**Problem:** Sorted array; remove duplicates in-place. Return new length. Elements beyond the new length don’t matter.

**Invariant:** `arr[0..write-1]` has no duplicates and is sorted. We only append when we see a **new** value (different from the last one we wrote).

**Setup:** First element is always kept. So `write = 1`, and we scan with `read` from index `1`.

**Logic:** If `arr[read] !== arr[write - 1]`, then we have a new value → `arr[write] = arr[read]`, `write++`. Otherwise skip (duplicate).

**Trace:** `[1, 1, 2, 2, 3]`

```text
write=1, read=1: 1==1 → duplicate, read++
write=1, read=2: 2!=1 → arr[1]=2, write=2, read++
write=2, read=3: 2==2 → duplicate, read++
write=2, read=4: 3!=2 → arr[2]=3, write=3
→ length = 3, array = [1, 2, 3, ...]
```

**Time:** O(n). **Space:** O(1).

### Worked Example: Move Zeroes

**Problem:** Move all zeros to the end in-place. Relative order of non-zeros must stay.

**Idea:** Same as “remove zeros” from the “front” and then fill the rest with zeros. Read pointer scans; write pointer is where the next non-zero goes.

**Logic:** For each `read`, if `arr[read] !== 0`, then `arr[write] = arr[read]`, `write++`. After the loop, fill indices `write` to `length-1` with 0.

**Trace:** `[0, 1, 0, 3, 12]`

```text
read=0: 0 → skip
read=1: 1 → arr[0]=1, write=1
read=2: 0 → skip
read=3: 3 → arr[1]=3, write=2
read=4: 12 → arr[2]=12, write=3
Then set arr[3]=0, arr[4]=0 → [1, 3, 12, 0, 0]
```

**Time:** O(n). **Space:** O(1).

---

## How to Apply It Step by Step

1. **Read the problem** — Sorted? In-place? Pair/subarray? Partition/remove?
2. **Choose pattern:**
   - Need a **pair from opposite ends** or **palindrome** → **Opposite ends.**
   - Need **in-place remove/move/partition** or **one pass filter** → **Same direction.**
3. **Set initial positions** — e.g. `left=0`, `right=n-1` or `write=0`, then loop `read`.
4. **Define loop condition** — `while (left < right)` or `for (read = 0; read < n; read++)`.
5. **Define movement rules** — When to move which pointer, and when to update values (e.g. when to write, when to return).
6. **Check boundary** — Empty array, single element, all same value — and that you don’t read past the array.

---

## Common Pitfalls

- **Using opposite-ends on unsorted array** — The “move left vs right” logic usually relies on sorted order. If the problem says “sorted”, use that; if not, consider sorting first or a different pattern.
- **Off-by-one in write index** — In same-direction, decide whether the first element is “already written” (then `write` starts at 1) or not (then `write` starts at 0 and you write the first valid element).
- **Modifying the array while iterating** — Prefer one read pointer and one write pointer; don’t write at the same index you’re reading from in a way that changes meaning (usually write <= read avoids that).
- **Forgetting to fill the rest** — In “move zeroes”, after copying non-zeros forward, you must set the remaining positions to 0 (or whatever the problem requires).

---

## Example Problems

**Opposite ends:**

- Two Sum II (sorted array)
- Valid Palindrome
- 3Sum / 4Sum (fix one or two, then two pointers)
- Container With Most Water
- Trapping Rain Water (variant with two pointers)
- Squares of a Sorted Array (two pointers from both ends, merge into result)

**Same direction:**

- Remove Duplicates from Sorted Array
- Move Zeroes
- Remove Element
- Sort Colors (Dutch National Flag — three-way partition with multiple pointers)
- Remove Duplicates from Sorted Array II (at most 2 duplicates)

---

## Code Reference

In this folder, `Two_Pointers.js` contains:

- **Opposite ends:** `twoSumSorted`, `isPalindrome`
- **Same direction:** `removeDuplicates`, `moveZeroes`

Use these as reference implementations. For new problems, identify the pattern (opposite ends vs same direction), then adapt the initial indices, loop condition, and movement rules to your problem.
