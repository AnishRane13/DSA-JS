// https://neetcode.io/problems/trapping-rain-water/solution

 function trap(height) {
    let l = 0, r = height.length - 1, leftMax = height[l], rightMax = height[r];
    let res = 0;
    while (l < r) {
        if (leftMax < rightMax) {
          l++;
          leftMax = Math.max(leftMax, height[l]);
          res += leftMax - height[l];
        } else {
            r--;
            rightMax = Math.max(rightMax, height[r]);
            res += rightMax - height[r];
        }
    }
    return res;
 }

 console.log(trap([0,2,0,3,1,0,1,3,2,1]))