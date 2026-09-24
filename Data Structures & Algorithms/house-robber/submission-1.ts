class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        let robOne = 0
        let robTwo = 0

        for(let n of nums) {
            let temp = Math.max(robOne + n, robTwo)

            robOne = robTwo
            robTwo = temp
        }

        return robTwo
    }
}
