class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0
        let r = 1

        let solution = 0

        while (r < prices.length) {
            if(prices[r] - prices[l] > 0) {
                solution = Math.max(solution, prices[r] - prices[l])
            } else l = r

            r++
        }

        return solution
    }
}
