class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let map = new Map()

        for(let i = 0; i < numbers.length; i ++) {
            let toFind = target - numbers[i]
            if(map.has(toFind)) {
                return [map.get(toFind) + 1, i + 1]
            }

            map.set(numbers[i], i)
        }

        return []
    }
}
