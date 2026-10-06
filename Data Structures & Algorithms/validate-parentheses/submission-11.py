class Solution:
    def isValid(self, s: str) -> bool:
        stack = []

        openVals = {"[": "]", 
                    "{": "}",
                    "(": ")"}

        for i in range(len(s)):
            if s[i] in openVals:
                stack.append(s[i])
            elif not stack or openVals.get(stack[-1]) != s[i]:
                return False
            else:
                stack.pop()

        return len(stack) == 0