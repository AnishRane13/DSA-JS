var maxProduct = function(nums){
    let currentProduct = nums[0];
    let maxProduct = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentProduct = Math.max(nums[i], currentProduct*nums[i]);
        maxProduct= Math.max(currentProduct, maxProduct)
    }
    return maxProduct
}



console.log(maxProduct([-2,0,-1]))