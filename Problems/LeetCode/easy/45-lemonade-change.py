class Solution(object):
    def lemonadeChange(self, bills):
        five, ten = 0, 0
        for b in bills:
            if b == 5:
                five += 1
            elif b == 10:
                ten += 1
                five -= 1
            elif b == 20:
                if ten > 0:
                    ten -= 1
                    five -= 1
                else:
                    five -= 3
            if five < 0 or ten < 0: return False
        return True
