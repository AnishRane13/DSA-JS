// https://leetcode.com/problems/rotate-image/description/

var rotate = function(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i+1; j < matrix[0].length; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    let n = matrix.length;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length/2; j++) {
          [matrix[i][j], matrix[i][n - 1 - j]] = [matrix[i][n - 1 - j], matrix[i][j]];
        }
    }
    return matrix
}; 

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))