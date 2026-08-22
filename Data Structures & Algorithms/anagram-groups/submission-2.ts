class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let map = new Map<string, string[]>()

        for(const str of strs) {
            let thisStr = str.split("").sort().join(" ")

            if(!map.has(thisStr)) {
                map.set(thisStr, [])
            }

            map.get(thisStr).push(str)
        }

        return Array.from(map.values());
    }
}
