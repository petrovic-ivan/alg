def distributeCandies(candies):
    kinds = len(set(candies))
    half = len(candies) // 2
    return half if kinds > half else kinds

print(distributeCandies([1,1,2,2,3,3]))