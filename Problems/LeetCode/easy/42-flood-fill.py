class Solution(object):
    def floodFill(self, image, sr, sc, newColor):
        origin = image[sr][sc]
        if origin == newColor: return image
        R, C = len(image), len(image[0])
        def fill(r, c):
             if r >= R or r < 0 or c >= C or c < 0: 
                 return
             if image[r][c] == origin:
                image[r][c] = newColor
                fill(r-1, c)
                fill(r+1, c)
                fill(r, c-1)
                fill(r, c+1)
        fill(sr, sc)
        return image

instance = Solution()

print(instance.floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2))
        