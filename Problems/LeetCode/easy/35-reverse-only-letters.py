class Solution(object):
    def reverseOnlyLetters(self, S):
        c = list(S)
        i = 0
        j = len(c) - 1
        while i < j:
            while not c[i].isalpha() and i < j:
                i += 1
            while not c[j].isalpha() and i < j:
                j -= 1
            c[i] = S[j]
            c[j] = S[i]
            i += 1
            j -= 1
        return ''.join(c)



instance = Solution()

print("Example 1: Result - " + str(instance.reverseOnlyLetters("ab-cd")) + " Expected: dc-ba")       
print("Example 2: Result - " + str(instance.reverseOnlyLetters("a-bC-dEf-ghIj")) + " Expected: j-Ih-gfE-dCba") 
print("Example 3: Result - " + str(instance.reverseOnlyLetters("Test1ng-Leet=code-Q!")) + " Expected: Qedo1ct-eeLg=ntse-T!") 