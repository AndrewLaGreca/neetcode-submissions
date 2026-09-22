class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        if(s.length % 2 !== 0) return false

        let openStack: string[] = []
        let getOpen = {
            "}" : "{",
            "]" : "[",
            ")" : "("
        }

        let closeSet = new Set()
        closeSet.add("}")
        closeSet.add("]")
        closeSet.add(")")

        for(let i = 0; i < s.length; i++) {
            if(!closeSet.has(s[i])) {
                openStack.push(s[i])
            } else if(getOpen[s[i]] === openStack[openStack.length - 1]) {
                openStack.pop()
            } else return false
        }
    
        return openStack.length === 0
    }
}
