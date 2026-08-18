class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        // check rows
        for(let r = 0; r < 9; r++) {
            let set = new Set()

            for(let c = 0; c < 9; c++) {
                if(board[r][c] === ".") continue
                if(set.has(board[r][c])) return false

                set.add(board[r][c])
            }
        }

        // check cols
        for(let c = 0; c < 9; c++) {
            let set = new Set()

            for(let r = 0; r < 9; r++) {
                if(board[r][c] === ".") continue
                if(set.has(board[r][c])) return false

                set.add(board[r][c])
            }
        }

        // check squares
        for(let squareR = 0; squareR < 9; squareR += 3) {
            for(let squareC = 0; squareC < 9; squareC += 3) {
                let set = new Set()

                for(let miniR = 0; miniR < 3; miniR++) {
                    for(let miniC = 0; miniC < 3; miniC++) {
                        if(board[miniR + squareR][miniC + squareC] === ".") continue
                        if(set.has(board[miniR + squareR][miniC + squareC])) return false

                        set.add(board[miniR + squareR][miniC + squareC]) 
                    }
                }

            }
        }

        return true
    }
}
