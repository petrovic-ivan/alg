"""

Given a string s of '(' , ')' and lowercase English characters. 

Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:

It is the empty string, contains only lowercase characters, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.
 
Example 1:
    Input: s = "lee(t(c)o)de)"
    Output: "lee(t(c)o)de"
    Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.

Example 2:
    Input: s = "a)b(c)d"
    Output: "ab(c)d"

Example 3:
    Input: s = "))(("
    Output: ""
    Explanation: An empty string is also valid.

Example 4:
    Input: s = "(a(b(c)d)"
    Output: "a(b(c)d)"

Constraints:

1 <= s.length <= 10^5
s[i] is one of  '(' , ')' and lowercase English letters.

"""

class Solution(object):
    def minRemoveToMakeValid(self, s):
        s1 = ""
        counter = 0
        for c in s:
            if c == '(':
                counter += 1
            if c == ')' and counter == 0:
                continue
            if c == ')' and counter > 0:
                counter -= 1
            s1 += c

        s2 = ""
        counter = 0
        for c in reversed(s1):
            if c == ')':
                counter += 1
            if c == '(' and counter == 0:
                continue
            if c == '(' and counter > 0:
                counter -= 1
            s2 = c + s2

        return s2
        

instance = Solution()

print("Example 1: Result - " + str(instance.minRemoveToMakeValid("lee(t(c)o)de)")) + " Expected: lee(t(c)o)de")       
print("Example 2: Result - " + str(instance.minRemoveToMakeValid("a)b(c)d")) + " Expected: ab(c)d") 
print("Example 3: Result - " + str(instance.minRemoveToMakeValid("))((")) + " Expected: ") 
print("Example 4: Result - " + str(instance.minRemoveToMakeValid("(a(b(c)d)")) + " Expected: a(b(c)d)") 
print('Example 5: Result - ' + str(instance.minRemoveToMakeValid("())()(((")) + " Expected: ()()")
