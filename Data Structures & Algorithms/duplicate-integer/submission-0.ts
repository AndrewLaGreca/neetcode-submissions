class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        for(let i = 0; i < nums.length; i++) {
            let thisNumber = nums[i];

            for(let j = 0; j < nums.length; j++){
                if(j !== i && thisNumber === nums[j]) return true
            }
        }

        return false
    }
}
