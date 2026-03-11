// https://leetcode.com/problems/search-a-2d-matrix/description/

var searchMatrix = function (matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;

  for (let i = m - 1; i >= 0; i--) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] < target) {
        continue;
      } else if (matrix[i][j] == target) {
        return true;
      }
    }
  }
  return false;
};

// var searchMatrix = function (matrix, target) {
//   const row = matrix.length;
//   const col = matrix[0].length;

//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[0].length; j++) {
//       if (matrix[i][j] === target) {
//         return true
//       }
//     }
//   }
//   return false
// };

console.log(
  searchMatrix([
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],3),
);
