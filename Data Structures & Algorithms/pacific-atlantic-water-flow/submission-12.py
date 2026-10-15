class Solution:
    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
        atlanticReaches = set()
        pacificReaches = set()

        directions = [
            [1, 0],
            [0, 1],
            [-1, 0],
            [0, -1]
        ]

        def searchPacific(row, col, ocean):
            queue = [[row, col]]

            if ocean == "pacific":
                pacificReaches.add((row, col))
            else: 
                atlanticReaches.add((row, col))

            while len(queue) > 0:
                thisLocation = queue.pop(0)

                for thisDirection in directions:
                    nextRow = thisLocation[0] + thisDirection[0]
                    nextCol = thisLocation[1] + thisDirection[1]

                    if 0 <= nextRow < len(heights) and 0 <= nextCol < len(heights[0]):
                        if ocean == "pacific":
                            if(nextRow, nextCol) not in pacificReaches:
                                if heights[nextRow][nextCol] >= heights[thisLocation[0]][thisLocation[1]]:
                                    pacificReaches.add((nextRow, nextCol))
                                    queue.append([nextRow, nextCol])
                        else: 
                            if(nextRow, nextCol) not in atlanticReaches:
                                if heights[nextRow][nextCol] >= heights[thisLocation[0]][thisLocation[1]]:
                                    atlanticReaches.add((nextRow, nextCol))
                                    queue.append([nextRow, nextCol])

        for r in range(len(heights)):
            searchPacific(r, 0, "pacific")

        for c in range(len(heights[0])):
            searchPacific(0, c, "pacific")

        for r in range(len(heights)):
            searchPacific(r, len(heights[0]) - 1, "atlantic")

        for c in range(len(heights[0])):
            searchPacific(len(heights) - 1, c, "atlantic")

        return [list(cell) for cell in pacificReaches & atlanticReaches]