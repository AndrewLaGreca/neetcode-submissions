class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let solution: number = -1

        let l = 0
        let r = heights.length - 1

        while(l < r) {
            let h = Math.min(heights[l], heights[r])

            let a = h * (r - l)
            if(a > solution) {
                solution = a 
            }

            if(heights[l] > heights[r]) {
                r--
            } else l++
        }

        return solution
    }
}
