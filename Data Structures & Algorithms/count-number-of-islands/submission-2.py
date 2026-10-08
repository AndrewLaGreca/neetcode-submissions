class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        rows = len(grid)
        cols = len(grid[0])

        visited = {}
        solution = 0

        directions = [
            [1, 0],
            [0, 1],
            [-1, 0],
            [0, -1]
        ]

        def dfs(thisRow, thisCol):
            visited[(thisRow, thisCol)] = (thisRow, thisCol)
            queue = []
            queue.append([thisRow, thisCol])

            while bool(queue):
                thisRow, thisCol = queue.pop()

                for thisDirection in directions:
                    nextRow = thisRow + thisDirection[0]
                    nextCol = thisCol + thisDirection[1]

                    if nextRow >= rows or nextCol >= cols or nextRow < 0 or nextCol < 0:
                        continue

                    if (nextRow, nextCol) not in visited and grid[nextRow][nextCol] == "1":
                        queue.append([nextRow, nextCol])
                        visited[(nextRow, nextCol)] = (thisRow, thisCol)

        for thisRow in range(rows):
            for thisCol in range(cols):
                if (thisRow, thisCol) not in visited and grid[thisRow][thisCol] == "1":
                    dfs(thisRow, thisCol)
                    solution += 1

        return solution