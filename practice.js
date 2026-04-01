function temperatures(nums) {
    let ans = new Array(nums.length).fill(0);
    let stack = [];

    for (let i = 0; i <  nums.length; i++) {
        while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {
            let prevIndex = stack.pop();
            ans[prevIndex] = i - prevIndex;
        }
        stack.push(i);
    }
    return ans;
}

console.log(temperatures([73, 74, 75, 71, 69, 72, 76, 73]))


