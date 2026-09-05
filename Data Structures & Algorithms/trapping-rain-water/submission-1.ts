class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let left = 0
        let right = height.length - 1

        let leftMax = height[left]
        let rightMax = height[right]

        let solution = 0

        while(left < right) {
            if(leftMax < rightMax) {
                left++
                leftMax = Math.max(height[left], leftMax)
                solution += leftMax - height[left]
            } else {
                right--
                rightMax = Math.max(height[right], rightMax)
                solution += rightMax - height[right]
            }
        }

        return solution
    }
}
