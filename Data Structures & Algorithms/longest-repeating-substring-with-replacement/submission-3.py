class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        thisDict = {}

        l, r = 0, 0

        freq = 0
        maxFreq = 0

        solution = 0

        while r < len(s):
            thisDict[s[r]] = thisDict.get(s[r], 0) + 1
            maxFreq = max(thisDict.get(s[r]), maxFreq)

            if k < (r - l + 1) - maxFreq:
                thisDict[s[l]] = thisDict.get(s[l]) - 1
                l += 1

            solution = max(solution, (r - l + 1))

            r +=1

        return solution
