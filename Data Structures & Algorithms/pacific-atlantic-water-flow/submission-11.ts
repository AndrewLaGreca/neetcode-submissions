class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights: number[][]): number[][] {
        let solution: number[][] = []

        let directions = [
            [1, 0],
            [0, 1],
            [-1, 0],
            [0, -1]
        ]

        let rows = heights.length
        let cols = heights[0].length

        let atlantic = new Set<string>()
        let pacific = new Set<string>()

        let search = (thisRow: number, thisCol: number, thisSet: Set<string>) => {
            let queue: number[][] = []
            queue.push([thisRow, thisCol])
            thisSet.add(`${thisRow},${thisCol}`)

            while(queue.length > 0) {
                let currLocation = queue.pop()
                let currRow = currLocation[0]
                let currCol = currLocation[1]

                for(let dr of directions) {
                    let nextRow = currRow + dr[0]
                    let nextCol = currCol + dr[1]

                    // ensure that the next location is
                    //      1) valid
                    //      2) not yet visited
                    //      3) greater than or equal to the current location
                    // if all 3 are true, add it to the queue

                    if(nextRow >= 0 &&
                        nextRow < rows &&
                        nextCol >= 0 &&
                        nextCol < cols && 
                        !thisSet.has(`${nextRow},${nextCol}`) &&
                        heights[nextRow][nextCol] >= heights[currRow][currCol]) {
                            queue.push([nextRow, nextCol])
                            thisSet.add(`${nextRow},${nextCol}`)
                        }
                    }
                }
            }
        

        // hydrate every left (pacific) boundary
        for(let r = 0; r < rows; r++) search(r, 0, pacific)

        // hydrate every top (pacific) boundary
        for(let c = 1; c < cols; c++) search(0, c, pacific)

        // hydrate every right (atlantic) boundary
        for(let r = 0; r < rows; r++) search(r, cols - 1, atlantic)

        // hydrate every bottom (atlantic) boundary
        for(let c = 0; c < cols - 1; c++) search(rows - 1, c, atlantic)

        // check for overlap
        for(let r = 0; r < rows; r++) {
            for(let c = 0; c < cols; c++) {
                if(pacific.has(`${r},${c}`) && atlantic.has(`${r},${c}`)) {
                    solution.push([r, c])
                }
            }
        }

        return solution
    }
}
