class Solution:
    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
        atlanticSet = set()
        pacificSet = set()

        directions = [
            [1, 0],
            [0, 1],
            [-1, 0],
            [0, -1]
        ]

        def search(row, col, ocean):
            queue = [[row, col]]

            pacificSet.add((row, col)) if ocean == "p" else atlanticSet.add((row, col))

            while queue:
                thisLocation = queue.pop(0)
                thisRow = thisLocation[0]
                thisCol = thisLocation[1]

                visisted = pacificSet if ocean == "p" else atlanticSet
                visisted.add((thisRow, thisCol))

                for d in directions:
                    nextRow = thisRow + d[0]
                    nextCol = thisCol + d[1]

                    if -1 < nextRow < len(heights) and -1 < nextCol < len(heights[0]):
                        if heights[nextRow][nextCol] >= heights[thisRow][thisCol] and (nextRow, nextCol) not in visisted:
                            queue.append([nextRow, nextCol])
                            pacificSet.add((nextRow, nextCol)) if ocean == "p" else atlanticSet.add((nextRow, nextCol))

        for row in range(len(heights)):
            search(row, 0, "p")
            search(row, len(heights[0]) - 1, "a")

        for col in range(len(heights[0])):
            search(0, col, "p")
            search(len(heights) - 1, col, "a")

        return [[r, c] for r, c in atlanticSet & pacificSet]