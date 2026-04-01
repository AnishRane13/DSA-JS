// https://leetcode.com/problems/search-a-2d-matrix/description/

// var searchMatrix = function (matrix, target) {
//   const m = matrix.length;
//   const n = matrix[0].length;

//   for (let i = m - 1; i >= 0; i--) {
//     for (let j = 0; j < n; j++) {
//       if (matrix[i][j] < target) {
//         continue;
//       } else if (matrix[i][j] == target) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

var searchMatrix = function (matrix, target) {
  const row = matrix.length;
  const col = matrix[0].length;
  let rowLeft = 0;
  let rowRight = row - 1;

  while (rowLeft <= rowRight) {
    let mid = Math.floor((rowLeft + rowRight) / 2);
    // console.log(matrix[mid])
 if (target > matrix[mid][col - 1]) {
  rowLeft = mid + 1;
} else if (target < matrix[mid][0]) {
  rowRight = mid - 1;
    }else{
      let left = 0, right = col-1;
      while (left <= right) {
         let midVal = Math.floor((left + right) / 2)
        if (target === matrix[mid][midVal]) {
            return true;
        } else if (target < matrix[mid][midVal]) {
            right = midVal - 1;
        } else {
            left = midVal + 1;
        }
      }
      return false
    }
  }

  return false;
};

console.log(
  searchMatrix([
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],13),
);
