class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let solution: number = 0

        for(let i = 0; i < prices.length; i++) {
            let thisPrice = prices[i]

            for(let j = i + 1; j < prices.length; j++) {
                let futurePrice = prices[j]

                if(futurePrice - thisPrice > solution) solution = futurePrice - thisPrice
            }
        }

        return solution
    }
}
