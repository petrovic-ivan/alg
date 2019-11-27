/*

We have a collection of rocks, each rock has a positive integer weight.

Each turn, we choose the two heaviest rocks and smash them together.  Suppose the stones have weights x and y with x <= y.  The result of this smash is:

If x == y, both stones are totally destroyed;
If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

Example 1:
    Input: [2,7,4,1,8,1]
    Output: 1

    Explanation: 
    We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
    we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
    we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
    we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.
 
Note:

1 <= stones.length <= 30
1 <= stones[i] <= 1000

*/

let lastStoneWeight = function (stones) {
    if (stones.length === 1) return stones[0];
    if (stones.length === 2) return Math.abs(stones[0] - stones[1]);

    stones = stones.sort((a, b) => b - a);
    while (stones.length > 1) {
        const abs = Math.abs(stones[0] - stones[1]);
        stones.shift();
        if (stones[1] <= abs) {
            stones[0] = abs;
            continue;
        }
        let i = 0;
        stones[i] = abs;
        while (stones.length - 1 > i && abs < stones[i + 1]) {
            let tmp =  stones[i];
            stones[i] = stones[i + 1];
            stones[i + 1] = tmp;
            i++;
        }
    }

    return stones[0];
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
console.log(lastStoneWeight([7, 6, 7, 6, 9]));
console.log(lastStoneWeight([9,3,2,10]));

