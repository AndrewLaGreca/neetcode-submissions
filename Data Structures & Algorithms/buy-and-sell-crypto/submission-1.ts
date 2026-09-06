class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let solution = 0

        let l = 0
        let r = 1

        while(r < prices.length) {
            if(prices[l] < prices[r]) {
                solution = Math.max(solution, prices[r] - prices[l])
            } else l = r
            r++
        }

        return solution
    }
}
