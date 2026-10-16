class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        stringOne = [0] * 26
        stringTwo = [0] * 26

        for l in s1:
            thisLetter = ord(l) - 97
            stringOne[thisLetter] += 1

        r = 0
        l = 0

        while r < len(s2):
            stringTwo[ord(s2[r]) - 97] += 1

            if r - l + 1 > len(s1):
                stringTwo[ord(s2[l]) - 97] -= 1
                l += 1

            if stringOne == stringTwo:
                return True

            r += 1

        return False