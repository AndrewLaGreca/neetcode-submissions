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
            console.log(i, " where the top of the stack is: ", openStack[openStack.length - 1], " and s is: ", s[i])
            if(!closeSet.has(s[i])) {
                console.log(i, ": pushing to open stack: ", s[i])
                openStack.push(s[i])
            } else if(getOpen[s[i]] === openStack[openStack.length - 1]) {
                console.log(i, ": s is ", s[i], ", so popping ", openStack[openStack.length-1], " from the stack")
                openStack.pop()
            } else return false
        }
    
        return openStack.length === 0
    }
}
