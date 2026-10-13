class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if not s or not t:
            return ""

        targetDict = {}

        for char in t:
            if char not in targetDict:
                targetDict.update({char: 0})
            targetDict[char] += 1

        l, r = 0, 0
        windowDict = {}
        have = 0
        need = len(targetDict)

        bestLen = float("inf")
        bestL = 0
        bestR = 0

        while r < len(s):
            addedChar = s[r]

            if addedChar not in windowDict:
                windowDict.update({addedChar: 0})
            
            windowDict[addedChar] += 1

            if addedChar in targetDict and windowDict[addedChar] == targetDict[addedChar]:
                have += 1

            while have == need:
                windowLen = r - l + 1

                if windowLen < bestLen:
                    bestLen = windowLen
                    bestL = l
                    bestR = r

                removedChar = s[l]

                if removedChar in targetDict and windowDict[removedChar] == targetDict[removedChar]:
                    have -= 1

                windowDict[removedChar] -= 1
                l += 1

            r += 1

        if bestLen == float("inf"):
            return ""

        return s[bestL:bestR + 1]