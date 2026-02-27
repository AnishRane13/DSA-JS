var productExceptSelf = function (nums) {
    const n = nums.length;
    const ans = new Array(n);

    console.log("Input:", nums);
    console.log("------ PREFIX PASS ------");

    // Prefix pass
    for (let i = 0, left = 1; i < n; ++i) {
        console.log(`Before index ${i}: left = ${left}`);
        ans[i] = left;
        left *= nums[i];
        console.log(`After index ${i}: ans = [${ans}], new left = ${left}`);
        console.log("----");
    }

    console.log("After Prefix Pass:", ans);
    console.log("------ SUFFIX PASS ------");

    // Suffix pass
    for (let i = n - 1, right = 1; i >= 0; --i) {
        console.log(`Before index ${i}: right = ${right}`);
        ans[i] *= right;
        right *= nums[i];
        
        console.log(`After index ${i}: ans = [${ans}], new right = ${right}`);
        console.log("----");
    }

    console.log("Final Answer:", ans);
    console.log("=====================================");
    return ans;
};

console.log(productExceptSelf([-1, 1, 0, -3, 3]));
console.log(productExceptSelf([0, 0]));