var generate = function(numRows) {

    const arr = [[1]];
    
    for (let i = 1; i < numRows; i++) {
        const val = [1];
        for (let j = 1; j < i; j++) {
        let nextVal = arr[i-1][j] + arr[i-1][j-1]
        val.push(nextVal)
        }
        val.push(1)    
        arr.push(val)
    }
    return arr
};

console.log(generate(5));

// [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// i = 3
// j = 1