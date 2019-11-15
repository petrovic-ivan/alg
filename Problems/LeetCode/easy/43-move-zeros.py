class Solution(object):
    def moveZeroes(self, nums):
        i = 0
        j = 0
        while i < len(nums):
            if nums[i] != 0:
                tmp = nums[i]
                nums[i] = nums[j]
                nums[j] = tmp
                j += 1
            i += 1
        return nums


instance = Solution()

print(instance.moveZeroes([1,0,1,3,5,7,0,3,12]))