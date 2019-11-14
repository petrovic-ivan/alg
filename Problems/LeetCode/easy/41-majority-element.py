class Solution(object):
    def majorityElement(self, nums):
        counter = 0
        majority = 0
        for n in nums:
            if counter == 0: majority = n
            if majority == n: counter += 1
            else: counter -= 1
        return majority