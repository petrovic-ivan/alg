"""

Given a binary array, find the maximum number of consecutive 1s in this array.

Example 1:
    Input: [1,1,0,1,1,1]
    Output: 3

Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.

Note:
    The input array will only contain 0 and 1.
    The length of input array is a positive integer and will not exceed 10,000

"""

class Solution(object):
    def findMaxConsecutiveOnes(self, nums):
        maximum = 0
        count = 0
        for n in nums:
            count += n
            if n == 0:
                maximum = max(maximum, count)
                count = 0
        return max(maximum, count)

instance = Solution()

print("Example 1: Result - " + str(instance.findMaxConsecutiveOnes([1,1,0,1,1,1])) + " Expected: 3")       
print("Example 2: Result - " + str(instance.findMaxConsecutiveOnes([1,0,1,1,0,1])) + " Expected: 2") 