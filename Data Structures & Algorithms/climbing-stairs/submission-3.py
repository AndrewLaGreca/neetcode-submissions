class Solution:
    def climbStairs(self, n: int) -> int:
        thisStair, lastStair = 1, 1

        for n in range(n - 1):
            temp = thisStair
            thisStair += lastStair
            lastStair = temp

        return thisStair