"""

An array is monotonic if it is either monotone increasing or monotone decreasing.

An array A is monotone increasing if for all i <= j, A[i] <= A[j].  An array A is monotone decreasing if for all i <= j, A[i] >= A[j].

Return true if and only if the given array A is monotonic.

"""

def isMonotonic(A):
    inc  = A[0] > A[-1]
    for i in range(1, len(A)):
        if A[i - 1] != A[i] and (A[i - 1] < A[i]) == inc: 
            return False
    return True

print("Example 1: Result - " + str(isMonotonic([1,2,2,3])) + " Expected: True")       
print("Example 2: Result - " + str(isMonotonic([6,5,4,4])) + " Expected: True") 
print("Example 3: Result - " + str(isMonotonic([1,3,2])) + " Expected: False") 
print("Example 4: Result - " + str(isMonotonic([1,2,4,5])) + " Expected: True") 
print("Example 5: Result - " + str(isMonotonic([1,1,1])) + " Expected: True") 
        