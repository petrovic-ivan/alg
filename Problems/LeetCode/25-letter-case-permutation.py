"""

Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.  Return a list of all possible strings we could create.

Examples:
    Input: S = "a1b2"
    Output: ["a1b2", "a1B2", "A1b2", "A1B2"]

    Input: S = "3z4"
    Output: ["3z4", "3Z4"]

    Input: S = "12345"
    Output: ["12345"]
Note:

S will be a string with length between 1 and 12.
S will consist only of letters or digits.

"""

def backtrack(n, word, arr, S):
    if n == len(S):
        arr.append(word)
        return
    if S[n].isdigit():
        word += S[n]
        backtrack(n + 1, word, arr, S)
    else:
        word += S[n].lower()
        backtrack(n + 1, word, arr, S)
        word = word[:-1]
        word += S[n].upper()
        backtrack(n + 1, word, arr, S)
        
def letterCasePermutation(S):
    arr = []
    word = ""

    backtrack(0, word, arr, S)
    return arr

print("Example 1: Result - " + str(letterCasePermutation("a1b2")) + " Expected: ['a1b2', 'a1B2', 'A1b2', 'A1B2']")       
print("Example 2: Result - " + str(letterCasePermutation("3z4")) + " Expected: ['3z4', '3Z4']") 
print("Example 3: Result - " + str(letterCasePermutation("12345")) + " Expected: ['12345']") 
