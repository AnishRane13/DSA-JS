// /** * @param {
// number[][]
// } intervals * @return {
// number[][]
// } */ var merge = function (intervals) {
//     intervals.sort((a, b) => a[0] - b[0]);
//     const result = [];
//     const n = intervals.length;
//     let i = 0;
//     while (i < n) {
//         const left = intervals[i][0];
//         let right = intervals[i][1];
//         while (true) {
//             i++;
//             if (i < n && right >= intervals[i][0]) {
//                 right = Math.max(right, intervals[i][1]);
//             } else {
//                 result.push([left, right]);
//                 break;
//             }
//         }
//     } return result;
// };

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    console.log("Input intervals:", JSON.stringify(intervals));

    intervals.sort((a, b) => a[0] - b[0]);
    console.log("Sorted intervals:", JSON.stringify(intervals));

    const result = [];
    const n = intervals.length;
    let i = 0;

    while (i < n) {
        const left = intervals[i][0];
        let right = intervals[i][1];
        console.log(`\nStarting new merge group with interval [${left}, ${right}]`);

        while (true) {
            i++;
            if (i < n && right >= intervals[i][0]) {
                const prevRight = right;
                right = Math.max(right, intervals[i][1]);
                console.log(`  Overlapping interval found: [${intervals[i][0]}, ${intervals[i][1]}] — extending right from ${prevRight} to ${right}`);
            } else {
                console.log(`  No overlap. Pushing merged interval: [${left}, ${right}]`);
                result.push([left, right]);
                break;
            }
        }
    }

    console.log("\nFinal merged intervals:", JSON.stringify(result));
    return result;
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]))