class Solution(object):
    def oddCells(self, n, m, indices):
        matrix = []
        for i in range(0, n):
            matrix.append([0] * m)
        for i in indices:
            for ci in range(0, m):
                matrix[i[0]][ci] += 1
            for ri in range(0, n):
                matrix[ri][i[1]] += 1

        counter = 0
        for ri in range(0, n):
            for ci in range(0, m):
                if matrix[ri][ci] % 2 != 0: counter += 1
        return counter

                    
instance = Solution()
instance.oddCells(2, 3,[[0,1],[1,1]])