class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false

        let targetArray = new Array(26).fill(0)
        let windowArray = new Array(26).fill(0)

        let l = 0

        for(let i = 0; i < s1.length; i++) {
            targetArray[s1[i].charCodeAt() - 97] += 1
            windowArray[s2[i].charCodeAt() - 97] += 1
        }

        for(let r = s1.length; r < s2.length; r++) {
            if(targetArray.join() === windowArray.join()) return true

            windowArray[s2[l].charCodeAt() - 97] -= 1
            l++
            windowArray[s2[r].charCodeAt() - 97] += 1
        }

        return targetArray.join() === windowArray.join()
    }
}