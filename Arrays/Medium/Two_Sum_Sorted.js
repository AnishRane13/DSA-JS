// https://neetcode.io/problems/two-integer-sum-ii/question?list=neetcode150


var twoSum = (numbers, target) => {
    let left = 0, right = numbers.length - 1;

    while (left < right) {
        sum = numbers[left] + numbers[right]
        if (sum === target) {
            return [left+1, right+1];
        }else if(sum < target){
            left++;
        }else{
            right--;
        }
    }
}

console.log(twoSum([1,2,3,4],3))
