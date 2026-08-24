class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let newString: string = ""

        for(const str of strs){
            newString = newString + str.length + "#" + str
        }

        return newString
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let solution = []

        while(str) {
            let numLength = 0

            for(let i = 0; i < str.length; i++){
                if(str[i] === "#") {
                    numLength = i
                    break
                }
            }
                    
            const length = Number(str.slice(0, numLength))
            const start = numLength + 1

            solution.push(str.slice(start, start + length))
            str = str.slice(start + length)
        }

        return solution
    }
}
