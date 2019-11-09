class Solution(object):
    def duplicateZeros(self, arr):
        zeros = 0
        i = 0
        l = len(arr)
        while i + zeros < l:
            if arr[i] == 0: zeros += 1
            i += 1
        i -= 1
        while zeros > 0:
            if i + zeros < l: arr[i + zeros] = arr[i]
            if arr[i] == 0:
                zeros -= 1
                arr[i + zeros] = arr[i]
            i -= 1

instance = Solution()

arr1 = [9,0,9,0,6,0,0,0,1,1,6,5,4,4,8,3,0,0,0,1,5,3,0,0,7,2,1,0,2,0,9,1,0,2,0,0,0,0,0,0,0,6,0,0,7,9,0,8,7,0,9,7,1,0,2,0,0,0,0,9,0,0,0,0]
instance.duplicateZeros(arr1)
print("Example 1: Result - " + str(arr1))       
print("Example 1: Result - " + str([9,0,0,9,0,0,6,0,0,0,0,0,0,1,1,6,5,4,4,8,3,0,0,0,0,0,0,1,5,3,0,0,0,0,7,2,1,0,0,2,0,0,9,1,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0]))       
