class Solution(object):
    def findTheDifference(self, s, t):
        dic = {}
        for i in range(0, len(s)):
            if s[i] in dic: dic[s[i]] += 1
            else: dic[s[i]] = 1
        for i in range(0, len(t)):
            if t[i] not in dic or dic[t[i]] == 0: return t[i]
            dic[t[i]] -= 1