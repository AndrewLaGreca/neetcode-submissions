class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights: number[][]): number[][] {
        let solution: number[][] = []
        let directions: number[][] = [
            [1, 0],     // east
            [0, 1],     // south
            [-1, 0],    // west
            [0, -1]     // north
        ]

        let rows: number = heights.length
        let cols: number = heights[0].length

        let bfs = (thisRow: number, thisCol: number) => {
            let visited = new Set()
            visited.add(`${thisRow},${thisCol}`)
            let queue: number[][] = []
            queue.push([thisRow, thisCol])

            let toAtlantic: boolean = false
            let toPacific: boolean = false
            let solutionIsPushed: boolean = false

            while(queue.length > 0) {
                let thisItem = queue.pop()
                let currRow = thisItem[0]
                let currCol = thisItem[1]

                if(currRow == 0 || currCol == 0) toPacific = true
                if(currRow == rows - 1 || currCol == cols - 1) toAtlantic = true

                if(toPacific && toAtlantic) {
                    solution.push([thisRow, thisCol])
                    solutionIsPushed = true
                    break
                }

                for(let i = 0; i < directions.length && !solutionIsPushed; i++) {
                    let d = directions[i]
                    let neighborRow = currRow + d[0]
                    let neighborCol = currCol + d[1]

                    // 2)   if thisItem's is not neighbors with an ocean,
                    //      find if its neighbors are less than heights[currRow][currCol]
                    //      if they are, add them to the queue

                    if( neighborRow >= 0 &&
                        neighborRow < rows &&
                        neighborCol >= 0 &&
                        neighborCol < cols &&
                        heights[neighborRow][neighborCol] <= heights[currRow][currCol] &&
                        !visited.has(`${neighborRow},${neighborCol}`)) {
                            visited.add(`${neighborRow},${neighborCol}`)
                            queue.push([neighborRow, neighborCol])
                    }
                }
            }
        }

        for(let r = 0; r < rows; r++) {
            for(let c = 0; c < cols; c++) {
                bfs(r, c)
            }
        }

        return solution
    }
}
