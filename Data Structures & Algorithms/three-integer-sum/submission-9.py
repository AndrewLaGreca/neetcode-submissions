class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums = sorted(nums)
        solution = []

        for i in range(len(nums) - 1):
            if(i > 0 and nums[i] == nums[i - 1]):
                continue

            l = i + 1
            r = len(nums) - 1

            while(l < r):
                val = nums[i] + nums[l] + nums[r]

                if(val > 0):
                    r -= 1
                    while(l < r and nums[r] == nums[r + 1]):
                        r -= 1
                
                elif(val < 0):
                    l += 1
                    while(l < r and nums[l] == nums[l - 1]):
                        l += 1

                else:
                    solution.append([nums[i], nums[l], nums[r]])
                    
                    r -= 1
                    while(l < r and nums[r] == nums[r + 1]):
                        r -= 1
                    
                    l += 1
                    while(l < r and nums[l] == nums[l - 1]):
                        l += 1

        return solution
        