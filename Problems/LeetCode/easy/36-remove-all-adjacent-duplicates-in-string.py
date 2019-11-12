class Solution(object):
    def removeDuplicates(self, S):
        result = [S[0]]
        for c in list(S)[1:]:
            if not result:
                result.append(c)
            elif c != result[-1]: 
                result.append(c)
            else: 
                result.pop()
        return ''.join(result)


instance = Solution()

instance.removeDuplicates("abbaca")