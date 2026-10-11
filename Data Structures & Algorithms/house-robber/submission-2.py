class Solution:
    def rob(self, nums: List[int]) -> int:
        robOne, robTwo = 0, 0

        for n in nums:
            thisVal = max(robOne + n, robTwo)

            robOne = robTwo
            robTwo = thisVal

        return robTwo