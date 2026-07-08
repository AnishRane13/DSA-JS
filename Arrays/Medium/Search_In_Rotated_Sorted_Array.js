// https://leetcode.com/problems/search-in-rotated-sorted-array/description/

// var search = function (nums, target) {
//     let low = 0, high = nums.length - 1;


//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2)

//         if (nums[mid] === target) {
//             return mid;
//         }

//         if (nums[low] <= nums[mid]) {
//             if (nums[low] <= target && target <= nums[mid]) {
//                 high = mid - 1;
//             } else {
//                 low = mid + 1;
//             }
//         } else {
//             if (nums[mid] <= target && target <= nums[high]) {
//                 low = mid + 1;
//             } else {
//                 high = mid - 1;
//             }
//         }
//     }
//     return -1;
// };




var search = function (nums, target) {
    let low = 0, high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high)/2);

        if (nums[mid] == target) {
            return mid;
        }

        if (nums[low] <= nums[mid]) {
            if(nums[low] <= target && target <= nums[mid]){
                high = mid - 1;
            }else{
                low = mid + 1;
            }
        } else {
             if(nums[mid] <= target && target <= nums[high]){
                low = mid + 1;
            }else{
                high = mid - 1;
            }
        }
    }
    return -1;
};

// console.log(search([3, 4, 5, 6, 1, 2], 1))
console.log(search([4, 5, 6, 7, 0, 1, 2], 0))
// console.log(search([1,3], 1))