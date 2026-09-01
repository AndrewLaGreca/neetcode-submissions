class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()

        let l = 0
        let r = s.length - 1

        while(l < r) {
            if(s[l] === s[r]) {
                l++
                r--
            } else return false
        }

        return true
    }
}
