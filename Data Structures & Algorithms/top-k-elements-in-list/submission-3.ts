class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let map = new Map<number, number>()
        let answer = []

        for(const num of nums) {
            if(map.has(num)){
                map.set(num, map.get(num) + 1)
            } else map.set(num, 1)
        }

        for(let i = 0; i < k; i ++) {
            let gFreq = 0
            let gKey = 0;

            for(const [num, freq] of map) {
                if(freq > gFreq) {
                    gKey = num
                    gFreq = freq
                }
            }

            answer.push(gKey)
            map.delete(gKey)
        }

        return answer
    }
}
