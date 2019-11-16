class Solution(object):
    def largestSumAfterKNegations(self, A, K):
        A.sort()
        min_i = 0
        s = 0
        for i, n in enumerate(A):
            if n < 0 and K > 0:
                A[i] = -n
                K -= 1
            if A[min_i] > A[i]: min_i = i
            s += A[i]
        if K % 2 == 0: return s
        return s - A[min_i] - A[min_i]

instance = Solution()

print(instance.largestSumAfterKNegations([-8,3,-5,-3,-5,-2], 6))