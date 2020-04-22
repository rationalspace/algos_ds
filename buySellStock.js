/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    for(i=1;i<prices.length;i++){
        today = prices[i];
        yesterday = prices[i-1];
        if(yesterday<today){
            profit += today - yesterday;
        }
    }
    return profit;
};
console.log(maxProfit([7,6,4,3,1]));