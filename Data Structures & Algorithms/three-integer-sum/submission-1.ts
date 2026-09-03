class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums.sort((a, b) => a - b)

        let solution: number[][] = []

        for(let i = 0; i < nums.length - 2; i++) {
            if(i > 0 && nums[i] === nums[i - 1]) continue
            
            let current: number = nums[i]

            let l = i + 1
            let r = nums.length - 1

            while(l < r) {
                let sum = nums[r] + nums[l] + current

                if(sum > 0) {
                    r--
                    while(nums[r] === nums[r + 1]) r--
                } else if (sum < 0) {
                    l ++
                    while(nums[l] === nums[l - 1]) l++
                } else {
                    solution.push([current, nums[l], nums[r]])

                    r--
                    while(nums[r] === nums[r + 1]) r--

                    l ++
                    while(nums[l] === nums[l - 1]) l++
                }
            }
        }

        return solution
    }
}
