class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let l = 0
        let r = height.length - 1

        let leftMax = height[l]
        let rightMax = height[r]

        let solution = 0

        while(l < r) {
            if(leftMax < rightMax) {
                l++
                leftMax = Math.max(leftMax, height[l])
                solution += leftMax - height[l]
            } else {
                r--
                rightMax = Math.max(rightMax, height[r])
                solution += rightMax - height[r]
            }
        }

        return solution
    }
}
