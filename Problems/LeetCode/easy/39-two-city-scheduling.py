class Solution(object):
    def twoCitySchedCost(self, costs):
        costs.sort(key=lambda a: a[0] - a[1])
        m = 0
        l = len(costs)
        for i in range(l):        
            if i > l - i - 1: break
            m += costs[i][0] + costs[l - i - 1][1]
        return m

instance = Solution()

print(instance.twoCitySchedCost([[10, 20], [30, 200], [400, 50], [30, 20]]))