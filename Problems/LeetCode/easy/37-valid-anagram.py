class Solution(object):
    def isAnagram(self, s, t):
        if len(s) != len(t): return False

        dic = {}
        for i in range(0, len(s)):
            if s[i] in dic: dic[s[i]] += 1
            else: dic[s[i]] = 1
            if t[i] in dic: dic[t[i]] -= 1
            else: dic[t[i]] = -1
        for v in dic.values():
            if v > 0: return False
        return True

instance = Solution()

print(instance.isAnagram("a", "ab"))