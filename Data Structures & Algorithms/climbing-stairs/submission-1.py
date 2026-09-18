class Solution:
    def climbStairs(self, n: int) -> int:
        waysToCurrent = 1
        waysToPrior = 1

        for i in range(n - 1):
            temp = waysToPrior
            waysToPrior = waysToCurrent
            waysToCurrent = temp + waysToPrior

        return waysToCurrent
            