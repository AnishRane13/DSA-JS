var nextPermutation = function(nums) {
    let index = -1;
    let n = nums.length;
    for (let i = n-2; i >= 0; i--) {
        if(nums[i] < nums[i+1]){
            index = i;
            break;
        }
    }

    if (index === -1) {
        return nums.reverse();
    }

    for (let i = n - 1; i >= index; i--) {
      if (nums[i] > nums[index]) {
        let temp = nums[index];
        nums[index] = nums[i];
        nums[i] = temp;
        break;
      }
    }

       let left = index + 1;
    let right = n - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }

    return nums;

};