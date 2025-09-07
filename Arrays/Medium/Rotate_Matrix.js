// https://leetcode.com/problems/rotate-image/

var rotate = function(matrix) {
   let row = matrix.length;
   let col = matrix[0].length;

  
   for (let i = 0; i < Math.floor(row / 2); i++) {
       for (let j = 0; j < col; j++) {
           let temp = matrix[i][j];
           matrix[i][j] = matrix[row - 1 - i][j];
           matrix[row - 1 - i][j] = temp;
       }
   }

   
   for (let i = 0; i < row; i++) {
       for (let j = i + 1; j < col; j++) {
           let temp = matrix[i][j];
           matrix[i][j] = matrix[j][i];
           matrix[j][i] = temp;
       }
   }

   return matrix;
};

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));
