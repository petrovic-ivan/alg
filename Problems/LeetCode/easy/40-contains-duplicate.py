class Solution(object):
    def containsDuplicate(self, nums):
        return len(set(nums)) != len(nums)

instance = Solution()

print(instance.containsDuplicate([1,2,3,1]))