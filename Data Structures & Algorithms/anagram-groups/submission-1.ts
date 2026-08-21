class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let map = new Map<string, string[]>()

        for(let i = 0; i < strs.length; i++) {
            let current = strs[i].split("").sort().join()

            if(!map.has(current)) {
                map.set(current, [])
            }

            map.get(current).push(strs[i])
        }

        return Array.from(map.values())
    }
}
