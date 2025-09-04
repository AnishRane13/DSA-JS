var generate = function(numRows) {
  let arr = [];

  for (let row = 1; row <= numRows; row++) {
    let newArr = [1];
    let val = 1;
    for (let col = 1; col < row; col++){
    val = val * (row-col)
    val = val/col;
    newArr.push(val)
    }
    arr.push(newArr)
  }
  return arr
};

console.log(generate(5))