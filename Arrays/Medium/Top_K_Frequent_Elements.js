// https://neetcode.io/problems/top-k-elements-in-list/question?list=neetcode150


// var topKFrequent = (nums, k) => {
//     const map = new Map();

//     for (let val of nums) {
//         if (!map.has(val)) {
//             map.set(val, 1)
//         } else {
//             map.set(val, map.get(val) + 1)
//         }
//     }

//    const sorted = [...map.entries()].sort((a,b) => b[1] - a[1]);

//    const ans = sorted.splice(0,k).map(([key]) => key);
//     return ans
// }


var topKFrequent = (nums, k) => {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }

     const ans = [...map.entries()].sort((a,b) => b[1] - a[1]);

       return ans
        .slice(0, k)
        .map(([num, freq]) => num);
}

console.log(topKFrequent([1,2,1,2,1,2,3,1,3,2], 2))
    // console.log(topKFrequent([7, 7], 1))