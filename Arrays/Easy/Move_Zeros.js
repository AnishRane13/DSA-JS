var moveZeroes = function(nums) {
    let insertPos = 0;

    for (let i = 0; i < nums.length; i++) {
          if (nums[i]!== 0){
                [nums[i], nums[insertPos]] = [nums[insertPos], nums[i]];
                insertPos++;
          }
    }
    return nums
};

console.log(moveZeroes([0,1,0,3,12]))