class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        let set = new Set<number>()
        let longest = 0

        for(const num of nums) {
            if(set.has(num)) continue
            else set.add(num)
        }

        for(const num of set) {
            if(!set.has(num - 1)) {
                let current = num
                let streak = 1

                while(set.has(current + 1)) {
                    current++
                    streak++
                }

                if(streak > longest) longest = streak
            }
        }

        return longest
    }
}
