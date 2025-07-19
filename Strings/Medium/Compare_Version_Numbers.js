// https://leetcode.com/problems/compare-version-numbers/description/

var compareVersion = function(version1, version2) {
    const arr1 = version1.split(".");
    const arr2 = version2.split(".");

    // console.log("Version1:", version1, "->", arr1);
    // console.log("Version2:", version2, "->", arr2);

    let size = 0;
    if (arr1.length > arr2.length) {
        size = arr1.length;
    } else {
        size = arr2.length;
    }

    // console.log("Comparing up to size:", size);

    for (let i = 0; i < size; i++) {
        if (arr1[i] === undefined) {
            arr1[i] = 0;
        }
        if (arr2[i] === undefined) {
            arr2[i] = 0;
        }

        // console.log(`Comparing: arr1[${i}] = ${arr1[i]}, arr2[${i}] = ${arr2[i]}`);

        if (parseInt(arr1[i]) > parseInt(arr2[i])) {
            // console.log("Result: 1 (arr1 is greater)");
            return 1;
        } else if (parseInt(arr1[i]) < parseInt(arr2[i])) {
            // console.log("Result: -1 (arr2 is greater)");
            return -1;
        }
    }

    // console.log("Result: 0 (versions are equal)");
    return 0;
};


console.log(`Comparing "1.2" and "1.10": ${compareVersion("1.2", "1.10")}`);         // Expected: -1 (because 2 < 10)
console.log(`Comparing "1.01" and "1.001": ${compareVersion("1.01", "1.001")}`);   // Expected: 0 (because 01 and 001 both mean 1)
console.log(`Comparing "1.0" and "1.0.0.0": ${compareVersion("1.0", "1.0.0.0")}`); // Expected: 0 (missing revisions are treated as 0)
console.log(`Comparing "0.1" and "1.1": ${compareVersion("0.1", "1.1")}`);         // Expected: -1 (because 0 < 1)
console.log(`Comparing "1.0.1" and "1": ${compareVersion("1.0.1", "1")}`);         // Expected: 1 (because 0.1 is greater than 0.0)
console.log(`Comparing "7.5.2.4" and "7.5.3": ${compareVersion("7.5.2.4", "7.5.3")}`); // Expected: -1 (because 2 < 3)
console.log(`Comparing "1.0" and "1": ${compareVersion("1.0", "1")}`);             // Expected: 0
console.log(`Comparing "1.10.0" and "1.9.9": ${compareVersion("1.10.0", "1.9.9")}`); // Expected: 1 (because 10 > 9)
console.log(`Comparing "1.0.0" and "1.0": ${compareVersion("1.0.0", "1.0")}`);     // Expected: 0
console.log(`Comparing "1.0.0.1" and "1.0.0": ${compareVersion("1.0.0.1", "1.0.0")}`); // Expected: 1 (because 1 > 0)