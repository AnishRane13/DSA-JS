// https://neetcode.io/problems/top-k-elements-in-list/question?list=neetcode150


var topKFrequent = (nums, k) => {
    const map = new Map();

    for (let val of nums) {
        if (!map.has(val)) {
            map.set(val, 1)
        } else {
            map.set(val, map.get(val) + 1)
        }
    }

   const sorted = [...map.entries()].sort((a,b) => b[1] - a[1]);
    
   const ans = sorted.splice(0,k).map(([key]) => key);
    return ans
}

console.log(topKFrequent([1,1, 2, 2, 3, 3, 3], 2)),
console.log(topKFrequent([7,7], 1))