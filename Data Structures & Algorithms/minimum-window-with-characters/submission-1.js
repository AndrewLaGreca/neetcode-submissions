class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let target = new Map()

        // identify instances of each character in t
        for(let char of t) target.set(char, (target.get(char) || 0) + 1)

        let window = new Map()
        let have = 0
        let need = target.size

        let solution = s.length + 1
        let l = 0
        let bestR
        let bestL

        for(let r = 0; r < s.length; r++) {
            let char = s[r]

            window.set(char, (window.get(char) || 0) + 1)

            if(target.has(char) && window.get(char) === target.get(char)) have++

            while(have === need) {
                if (r - l + 1 < solution) {
                    solution = r - l + 1
                    bestL = l
                    bestR = r
                }

                window.set(s[l], window.get(s[l]) - 1)

                if(target.has(s[l]) && window.get(s[l]) < target.get(s[l])) have--

                l++
            } 
        }

        return solution != s.length + 1
            ? s.substring(bestL, bestR + 1)
            : ""
    }
}
