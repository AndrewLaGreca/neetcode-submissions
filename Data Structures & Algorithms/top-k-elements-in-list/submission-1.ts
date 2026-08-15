class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let map = new Map();
        let answer = []

        for(const num of nums) {
            if(!map.has(num)) {
                map.set(num, 1)
            } else {
                map.set(num, map.get(num) + 1)
            }
        }

        for(let i = 0; i < k; i++) {
            let greatest = -1000;
            let gKey = 0

            for (const [num, frequency] of map) {
                if (frequency > greatest) {
                    greatest = frequency;
                    gKey = num;
                }
            }

            map.delete(gKey)
            answer.push(gKey)
        }

        return answer
    }
}
