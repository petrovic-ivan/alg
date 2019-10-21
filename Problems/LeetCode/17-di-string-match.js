/*

Given a string S that only contains "I" (increase) or "D" (decrease), let N = S.length.

Return any permutation A of [0, 1, ..., N] such that for all i = 0, ..., N-1:

    If S[i] == "I", then A[i] < A[i+1]
    If S[i] == "D", then A[i] > A[i+1]
 

Example 1:
    Input: "IDID"
    Output: [0,4,1,3,2]

Example 2:
    Input: "III"
    Output: [0,1,2,3]

Example 3:
    Input: "DDI"
    Output: [3,2,0,1]
 
Note:

1 <= S.length <= 10000
S only contains characters "I" or "D".

*/

let diStringMatch = function (S) {
    let inc = 0;
    let dec = S.length;
    let arr = [];

    for (let i = 0; i < S.length; i++) {
        if (S[i] === 'I') {
            arr[i] = inc;
            inc++;
        } else {
            arr[i] = dec;
            dec--;
        }
    }
    arr.push(S[S.length - 1] === 'I' ? inc : dec);
    return arr;
};

console.log('Example 1: Result - ' + diStringMatch("IDID") + ' Expected: 0,4,1,3,2');
console.log('Example 2: Result - ' + diStringMatch("III") + ' Expected: 0,1,2,3');
console.log('Example 3: Result - ' + diStringMatch("DDI") + ' Expected: 3,2,0,1');