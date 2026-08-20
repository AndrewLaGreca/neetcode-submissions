class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let set = new Set<number>()

        for(const num of nums) {
            if(!set.has(num)) set.add(num)
            else return true
        }

        return false
    }
}
