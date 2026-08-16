class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encoded_string = ""

        for(const str of strs) {
            let characters = str.length
            encoded_string = encoded_string.concat("£").concat(str)
        }

        encoded_string = encoded_string.concat("£")

        return encoded_string
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let answer = []
        let word = ""

        for(let i = 0; i <= str.length; i++) {
            if(str[i] === "£") {
                answer.push(word)
                word = ""
            } else word = word.concat(str[i])
        }

        answer.splice(0, 1)
        return answer
    }
}
