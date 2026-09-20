class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        let n = 0 // number of islands

        let rows = grid.length
        let cols = grid[0].length

        let visited = new Set() // track already visisted lands

        let bfs = (r: number, c: number) => {
            let queue = [[r, c]]

            while(queue.length > 0) {
                let theseCoordinates = queue.pop()
                let thisRow = theseCoordinates[0]
                let thisCol = theseCoordinates[1]

                let directions = [[1,0],[0,1],[-1,0],[0,-1]]

                for(let d of directions) {
                    let nextRow = thisRow + d[0]
                    let nextCol = thisCol + d[1]

                    if(!visited.has(`${nextRow},${nextCol}`) &&
                        nextRow >= 0 &&
                        nextRow < rows &&
                        nextCol >= 0 &&
                        nextCol < cols &&
                        grid[nextRow][nextCol] === "1") {
                        visited.add(`${nextRow},${nextCol}`)
                        queue.push([nextRow, nextCol])
                    }
                }
            }
        }

        for(let r = 0; r < rows; r++) {
            for(let c = 0; c < cols; c++) {
                if(grid[r][c] === "1" && !visited.has(`${r},${c}`)) {
                    n++
                    bfs(r, c)
                }
            }
        }

        return n
    }
}
