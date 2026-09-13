class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let set = new Set(nums)
        return set.size !== nums.length


    }
}
