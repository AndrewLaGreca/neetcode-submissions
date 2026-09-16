class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0
        let solution = 0

        let maxF = 0
        let map = new Map()

        for(let r = 0; r < s.length; r++) {
            map.set(s[r], ((map.get(s[r]) || 0) + 1))
            maxF = Math.max(map.get(s[r]), maxF)

            if((r - l + 1 - maxF) > k) {
                map.set(s[l], map.get(s[l]) - 1)
                l++
            }

            solution = Math.max(solution, r - l + 1)
        }

        return solution
    }
}
