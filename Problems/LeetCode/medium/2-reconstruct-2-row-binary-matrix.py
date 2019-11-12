class Solution(object):
    def reconstructMatrix(self, upper, lower, colsum):
        matrix = []
        clen = len(colsum)

        for i in range(0, 2):
            matrix.append([0] * clen)

        upper_count = 0
        lower_count = 0
        for i in range(0, clen):
            if colsum[i] == 0: continue
            if colsum[i] == 2:
                upper_count += 1
                lower_count += 1
                matrix[0][i] = 1
                matrix[1][i] = 1

        for i in range(0, clen):
            if colsum[i] == 0: continue
            if colsum[i] == 1:
                if upper_count == upper and lower_count == lower: return []
                if upper_count < upper: 
                    matrix[0][i] = 1
                    upper_count += 1
                    continue
                if lower_count < lower: 
                    matrix[1][i] = 1
                    lower_count += 1
        
        if upper_count != upper or lower_count != lower: return []
        return matrix



instance = Solution()
print(instance.reconstructMatrix(3,0,[1,0,2,2,1]))