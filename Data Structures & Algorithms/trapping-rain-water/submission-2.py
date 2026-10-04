class Solution:
    def trap(self, height: List[int]) -> int:
        l = 0
        r = len(height) - 1

        lMax = height[l]
        rMax = height[r]

        s = 0

        while l < r:
            if lMax < rMax:
                l += 1
                lMax = max(height[l], lMax)
                s += lMax - height[l]
            else:
                r -= 1
                rMax = max(height[r], rMax)
                s += rMax - height[r]
        
        return s
            
                    
