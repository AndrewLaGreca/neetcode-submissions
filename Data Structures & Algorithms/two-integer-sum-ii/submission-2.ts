class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let solution: number[] = []

        let left = 0
        let right = numbers.length - 1

        while(left < right) {
            let leftValue = numbers[left]
            let rightValue = numbers[right]

            if(leftValue + rightValue === target) return [left + 1, right + 1]

            if(leftValue + rightValue > target) {
                right--
            } else {
                left++
            }
        }

        return solution
    }
}
