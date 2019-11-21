class Solution(object):
    def hasAlternatingBits(self, n):
       bins = format(n, 'b')
       for i in range(1, len(bins)):
           if bins[i] == bins[i - 1]: return False
       return True


instance = Solution()

print(instance.hasAlternatingBits(5))
print(instance.hasAlternatingBits(7))
print(instance.hasAlternatingBits(11))
print(instance.hasAlternatingBits(10))