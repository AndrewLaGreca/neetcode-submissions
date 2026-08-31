class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let l = 0
        let r = heights.length - 1

        let greatestArea = 0

        while(l < r) {
            let w = r - l
            let h = Math.min(heights[l], heights[r])
            
            if(greatestArea < w * h) {
                greatestArea = w * h
            }

            if(h === heights[l]) {
                l++
            } else r--
        }

        return greatestArea
    }
}
