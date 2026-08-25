class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let prefix = [1]

        for(let i = 1; i < nums.length; i++) {
            prefix.push(prefix[i - 1] * nums[i - 1])
        }

        let suffix = nums[nums.length - 1]

        for(let i = nums.length - 2; i >= 0; i--) {
            prefix[i] *= suffix
            suffix *= nums[i]
        }

        return prefix
    }
}
