class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0
        let solution = 0

        for(let r = 0; r < prices.length; r++) {
            if(prices[l] > prices[r]) {
                l = r
                continue
            }

            solution = Math.max(solution, prices[r] - prices[l])
        }

        return solution
    }
}
