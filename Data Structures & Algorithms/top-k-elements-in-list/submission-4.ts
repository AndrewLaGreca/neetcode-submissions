class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let map = new Map<number, number>()
        let answer: number[] = []

        for(const num of nums) {
            if(map.has(num)) {
                map.set(num, map.get(num) + 1)
            } else map.set(num, 1)
        }

        for(let i = k; i > 0; i--) {
            let greatest = 0
            let greatestKey = 0

            for(const item of map) {
                if(item[1] > greatest) {
                    greatest = item[1]
                    greatestKey = item[0]
                }
            }
            
            answer.push(greatestKey)
            map.delete(greatestKey)
        }

        return answer
    }
}
