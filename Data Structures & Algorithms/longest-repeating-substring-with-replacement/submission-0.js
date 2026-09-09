class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let map = new Map()
        let solution = 0

        let l = 0
        let maxFreq = 0

        for(let r = 0; r < s.length; r++) {
            if(!map.has(s[r])) { 
                map.set(s[r], 1) 
            } else { 
                map.set(s[r], map.get(s[r]) + 1) 
            }

            maxFreq = Math.max(maxFreq, map.get(s[r]))

            while(r - l + 1 - maxFreq > k) {
                map.set(s[l], map.get(s[l]) - 1)
                l++
            }

            solution = Math.max(solution, r - l + 1)
        }

        return solution
    }
}
