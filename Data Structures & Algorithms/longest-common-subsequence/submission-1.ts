class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1: string, text2: string): number {
        // make text1 the larger string regardless of input
        if(text1.length < text2.length) [text1, text2] = [text2, text1]

        // initialize two arrays at length of text2, the smaller string
        let prev = new Array(text2.length + 1).fill(0)
        let curr = new Array(text2.length + 1).fill(0)


        // construct a nested for loop, 
        // parent being indexed length of text1, rear facing
        for(let i = text1.length - 1; i >= 0; i--) {
            // child being indexed length of text2, rear facing
            for(let j = text2.length - 1; j >= 0; j--) {
                // if there is a match, add 1 to the previous value
                if(text1[i] === text2[j]) {
                    curr[j] = prev[j + 1] + 1
                } 
                else curr[j] = Math.max(curr[j + 1], prev[j])
            }
            [prev, curr] = [curr, prev]
        }

        return prev[0]
    }
}
