class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0
        let solution = 0
        let map = new Map()

        for(let r = 0; r < s.length; r++) {
            if(map.has(s[r])) {
                l = Math.max(map.get(s[r]) + 1, l)
            }

            map.set(s[r], r)
            solution = Math.max(solution, r - l + 1)
        }

        return solution
    }
}
