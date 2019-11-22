class Solution(object):
    def matrixReshape(self, nums, r, c):
        a = len(nums)
        b = len(nums[0])
        if a == 1 and b == 1: return nums
        if a * b != r * c: return nums
        if a == r and b == c: return nums

        result = [[]]
        r1 = 0
        c1 = 0
        for i in range(a):
            for j in range(b):
                result[r1].append(nums[i][j])
                c1 += 1
                if c1 > c -1 and r1 < r - 1:
                    r1 += 1
                    result.append([])
                    c1 = 0
        return result

instance = Solution()

print(instance.matrixReshape([[1, 2], [3, 4]], 1, 4))
print(instance.matrixReshape([[1, 2], [3, 4]], 2, 4))
print(instance.matrixReshape([[1, 2], [3, 4]], 4, 1))