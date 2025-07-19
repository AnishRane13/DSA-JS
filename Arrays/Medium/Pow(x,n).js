var myPow = function(x, n) {
    if (n === 0) {
        return 1;
    };

    if (n < 0) {
        x = 1/x;
        n = -n;
    }

    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
};

console.log(myPow(2.00000,10))