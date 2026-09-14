class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false

        let map1 = new Map()
        let map2 = new Map()

        for(let i = 0; i < s1.length; i++) {
            if(map1.has(s1[i])) {
                map1.set(s1[i], map1.get(s1[i]) + 1)
            } else map1.set(s1[i], 1)
        }

        console.log(Array.from(map1).sort())

        for(let i = 0; i < s2.length; i++) {
            for(let j = i; j < i + s1.length; j++) {
                if(map2.has(s2[j])) {
                    map2.set(s2[j], map2.get(s2[j]) + 1)
                } else map2.set(s2[j], 1)
            }

            if(JSON.stringify(Array.from(map1).sort()) === 
                JSON.stringify(Array.from(map2).sort())) return true
            console.log(i, Array.from(map2).sort())
            map2.clear()
        }

        return false
    }
}
