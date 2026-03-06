// https://leetcode.com/problems/container-with-most-water/

var maxArea = function(height) {
    let left = 0
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        maxArea = Math.max(maxArea, Math.abs(right - left) * Math.min(height[left], height[right]));

        if (height[left] < height[right]) {
            left++;
        }else{
            right--;
        }
    }
    return maxArea;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
