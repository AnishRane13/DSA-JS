// https://leetcode.com/problems/pascals-triangle-ii/

var getRow = function(rowIndex) {
    const arr = [];
    let val = 1;

    for (let r = 0; r <= rowIndex; r++) {
        arr.push(val);
        val = val * (rowIndex - r) / (r + 1);
    }

    return arr;
};

console.log(getRow(3));