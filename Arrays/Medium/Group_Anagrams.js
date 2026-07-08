// https://neetcode.io/problems/anagram-groups/question?list=neetcode150

// var groupAnagrams = (strs) => {
//     const map = new Map();

//     for(let val of strs){
//          let key = val.split('').sort().join('');
//         if (!map.has(key)) {
//             map.set(key, []);
//         }
//         map.get(key).push(val)
//     }
//     return ([...map.values()])
// }

var groupAnagrams = (strs) => {
    const map = new Map();

    for (let val of strs) {
        let key = val.split('').sort().join('');
        if(!map.has(key)){
            map.set(key, []);
        }
        map.get(key).push(val);
    }
    return ([...map.values()]);
}


console.log(groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]))
