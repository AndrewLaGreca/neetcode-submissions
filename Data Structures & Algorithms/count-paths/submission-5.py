class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        row = []

        for j in range(n):
            row.append(1)

        for r in range(m - 1):
            for c in range(n):
                if c == 0:
                    row[c] = 1
                    continue

                row[c] += (row[c - 1] | 0)

        return row[n - 1]