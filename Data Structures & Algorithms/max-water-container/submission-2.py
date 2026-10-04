class Solution:
    def maxArea(self, heights: List[int]) -> int:
        l = 0
        r = len(heights) - 1

        s = 0

        while l < r:
            thisHeight = min(heights[l], heights[r])
            thisVol = thisHeight * (r - l)
            s = max(s, thisVol)

            if(heights[l] < heights[r]):
                l += 1
            elif(heights[l] > heights[r]):
                r -= 1
            else: 
                l += 1
        
        return s
        