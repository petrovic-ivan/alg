"""

Given two arrays, write a function to compute their intersection.

Example 1:
    Input: nums1 = [1,2,2,1], nums2 = [2,2]
    Output: [2]

Example 2:
    Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
    Output: [9,4]

Note:
    Each element in the result must be unique.
    The result can be in any order.

"""

class Solution(object):
    
    def intersection(self, nums1, nums2):
        return list(set(nums1) & set(nums2))


instance = Solution()

print("Example 1: Result - " + str(instance.intersection([1,2,2,1], [2,2])) + " Expected: [2]")       
print("Example 2: Result - " + str(instance.intersection([4,9,5], [9,4,9,8,4])) + " Expected: [9,4]") 

        