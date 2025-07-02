var longestCommonPrefix = function(strs) {
    strs.sort();
    let result = "";
    let first = strs[0]
    let last = strs[strs.length-1];

    for(let i = 0; i < first.length; i++){
        if(first[i] === last[i]){
            result += first[i]
        }else{
            break;
        }
    }

    return result;
};

console.log(longestCommonPrefix(["flower","flow","flight"]))