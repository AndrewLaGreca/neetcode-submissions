class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        let set = new Set(nums)
        let longestStreak = 0

        for(const num of set) {
            if(!set.has(num - 1)) {
                let current = num
                let streak = 1

                while(set.has(current + 1)) {
                    current++
                    streak++
                }

                if(streak > longestStreak) longestStreak = streak
            }
        }

        return longestStreak
    }
}
