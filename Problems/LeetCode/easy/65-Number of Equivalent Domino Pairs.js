/*
 
Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j] = [c, d] if and only if either (a==c and b==d), or (a==d and b==c) - that is, one domino can be rotated to be equal to another domino.
Return the number of pairs (i, j) for which 0 <= i < j < dominoes.length, and dominoes[i] is equivalent to dominoes[j].

Example 1:
    Input: dominoes = [[1,2],[2,1],[3,4],[5,6]]
    Output: 1

Constraints:
    1 <= dominoes.length <= 40000
    1 <= dominoes[i][j] <= 9

 */

var numEquivDominoPairs = function (dominoes) {
    const counter = {};
    let res = 0;
    for (let i = 0; i < dominoes.length; i++) {
        const key = Math.min(dominoes[i][0], dominoes[i][1]) * 10 + Math.max(dominoes[i][0], dominoes[i][1]);
        if (counter[key] === undefined) 
            counter[key] = 0;
        else {
            counter[key]++;
            res += counter[key];
        }
    }
    return res;
};

console.log(numEquivDominoPairs([[1,2],[2,1],[3,4],[1,2],[1,2],[5,6]]));