class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        let currentRow = new Array(n).fill(1)

        for(let i = 1; i < m; i++) {
            for(let j = 1; j < n; j++) {
                currentRow[j] = currentRow[j - 1] + currentRow[j]
            }
        }

        return currentRow[n - 1]
    }
}
