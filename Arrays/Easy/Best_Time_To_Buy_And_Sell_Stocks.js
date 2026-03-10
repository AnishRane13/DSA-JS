// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

// var maxProfit = function (prices) {
//     let prof = 0; mini = prices[0], maxi = 0;

//     for (let i = 0; i < prices.length; i++) {
//         if (prices[i] > mini) {
//             prof = Math.max(prof, prices[i] - mini)
//         }
//         mini = Math.min(mini, prices[i])
//     }
//     return prof
// };

var maxProfit = function (prices) {
    
    let profit = 0, mini = prices[0];

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] > mini) {
            profit = Math.max(profit, prices[i]-mini)
        }
        mini = Math.min(mini, prices[i])
    }
    return profit
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7,6,4,3,1]));

// need to check if diff is 0
