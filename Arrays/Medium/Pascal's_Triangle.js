var generate = function(numRows) {
    let arr = [];

    for (let row = 1; row <= numRows; row++) {
        let newArr = [];
        let val = 1;
        newArr.push(val)
       
        for (let col = 1; col < row; col++) {
            val = val * (row-col);
            val = val/col;
            newArr.push(val);
        }
        arr.push(newArr)
    }

    return arr;
};

console.log(generate(5))