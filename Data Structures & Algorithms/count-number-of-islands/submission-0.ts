class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        let rows = grid.length
        let cols = grid[0].length

        let visited = new Set<string>()
        let n = 0

        let bfs = (row: number, col: number) => {
            const q: [number, number][] = [[row, col]]
            visited.add(`${row},${col}`)
            let i = 0
            
            while(i < q.length) {
                const [currentRow, currentCol] = q[i]
                i++

                let directions: [number, number][] = [
                    [1, 0], [0, 1], [-1, 0], [0, -1]
                ]

                for(let [dr, dc] of directions) {
                    const newRow = currentRow + dr
                    const newCol = currentCol + dc

                    if(newRow >= 0 && 
                        newCol >= 0 &&
                        newRow < rows &&
                        newCol < cols &&
                        grid[newRow][newCol] === '1' &&
                        !visited.has(`${newRow},${newCol}`)) {
                            q.push([newRow, newCol])
                            visited.add(`${newRow},${newCol}`)
                        }
                }
            }
        }

        for(let r = 0; r < rows; r++) {
            for(let c = 0; c < cols; c++) {
                if(grid[r][c] === "1" && !visited.has(`${r},${c}`)) {
                    bfs(r, c)
                    n++
                }
            }
        }

        return n
    }
}
