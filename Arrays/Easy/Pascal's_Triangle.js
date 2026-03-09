// https://leetcode.com/problems/pascals-triangle/description/
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let ans = [[1]];

    for (let i = 1; i < numRows; i++) {
    let currRow = [1];
        for (let j = 1; j < i ; j++) {
        //    console.log(i)
           let currVal = ans[i-1][j-1] + ans[i-1][j];
            currRow.push(currVal)
        }
    currRow.push(1);
    ans.push(currRow);
    }
    return ans;
};

console.log(generate(5));

// [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]