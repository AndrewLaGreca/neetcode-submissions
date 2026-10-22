class Solution:
    def rob(self, nums: List[int]) -> int:
        return(max(nums[0], self.helper(nums[1:]), self.helper(nums[:-1])))
        
    def helper(self, nums:list[int]) -> int:
        s = 0
        rob1 = 0
        rob2 = 0

        for n in nums:
            s = max(n + rob1, rob2)
            rob1 = rob2
            rob2 = s

        return rob2