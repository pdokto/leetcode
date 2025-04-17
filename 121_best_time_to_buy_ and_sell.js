/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = 0
    let maxProfit = 0

    for (let i = 1; i < prices.length ; i++){
        if (prices[min] < prices[i]){
            let profit = prices[i] - prices[min]
            maxProfit = Math.max( maxProfit, profit)
        } else {
            min = i
        }
    }
    return maxProfit
};
