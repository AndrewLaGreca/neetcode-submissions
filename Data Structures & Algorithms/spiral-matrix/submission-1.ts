class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix: number[][]): number[] {
        let solution = []

        let t = 0
        let l = 0
        let b = matrix.length - 1
        let r = matrix[0].length - 1

        while(t <= b && l <= r) {
            for(let i = l; i <= r; i++) {
                solution.push(matrix[t][i])
            }
            t++

            for(let i = t; i <= b; i++) {
                solution.push(matrix[i][r])
            }
            r--

            if(t <= b) {
                for(let i = r; i >= l; i--) {
                    solution.push(matrix[b][i])
                }
                b--
            }

            if(l <= r) {
                for(let i = b; i >= t; i--) {
                    solution.push(matrix[i][l])
                }
                l++
            }
        }

        return solution
    }
}
