class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        l, r = 0, 0
        solu = 0

        thisDict = {}

        while r < len(s):
            if s[r] in thisDict:
                l = max(l, thisDict[s[r]] + 1)

            thisDict.update({s[r]: r})
            solu = max(solu, r - l + 1)
            r += 1

        return solu