class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {
            map.set(nums[i], i);
        }

        for (let i = 0; i < nums.length; i++) {
            let difference = target - nums[i];

            if(map.has(difference) && map.get(difference) !== i) return([i, map.get(difference)])
        }
    }
}
