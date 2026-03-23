// https://leetcode.com/problems/daily-temperatures/

// var dailyTemperatures = function(temperatures) {
//     const ans = [];

//     for (let i = 0; i < temperatures.length-1; i++) {
//         let left = i;
//         let right = i+1;
//         let count = 0;
//         let warm = false;

//         while (warm == false) {
//             if (temperatures[left] < temperatures[right]) {
//                 count++;
//                 ans.push(count);
//                 warm = true
//             } else if(right == (temperatures.length - 1)){
//                 ans.push(0);
//                 warm = true;
//             }
//             else{
//                 right++;
//                 count++;
//             }
//         }
//     }
//     ans.push(0)
//     return ans;
// };

var dailyTemperatures = function (temperatures) {
    const ans = new Array(temperatures.length).fill(0);
    const stack = [];

    for (let i = temperatures.length - 1; i >= 0; i--) {
        while (
            stack.length > 0 &&
            temperatures[i] >= temperatures[stack[stack.length - 1]]
        ) {
            stack.pop();
        }

        if (stack.length > 0) {
            ans[i] = stack[stack.length - 1] - i;
        }

        stack.push(i);
    }

    return ans;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
console.log(dailyTemperatures([30, 40, 50, 60]))
console.log(dailyTemperatures([30, 60, 90]))