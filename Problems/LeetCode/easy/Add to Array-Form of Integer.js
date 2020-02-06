/*

For a non-negative integer X, the array-form of X is an array of its digits in left to right order.  
For example, if X = 1231, then the array form is [1,2,3,1].

Given the array-form A of a non-negative integer X, return the array-form of the integer X+K.

Example 1:
    Input: A = [1,2,0,0], K = 34
    Output: [1,2,3,4]
    Explanation: 1200 + 34 = 1234

Example 2:
    Input: A = [2,7,4], K = 181
    Output: [4,5,5]
    Explanation: 274 + 181 = 455

Example 3:
    Input: A = [2,1,5], K = 806
    Output: [1,0,2,1]
    Explanation: 215 + 806 = 1021

Example 4:
    Input: A = [9,9,9,9,9,9,9,9,9,9], K = 1
    Output: [1,0,0,0,0,0,0,0,0,0,0]
    Explanation: 9999999999 + 1 = 10000000000

Note：
    1 <= A.length <= 10000
    0 <= A[i] <= 9
    0 <= K <= 10000
    If A.length > 1, then A[0] != 0

*/

var addToArrayForm = function(A, K) {
    let i = A.length - 1;
    while (K > 0) {
        let r = K % 10;
        K = Math.floor(K / 10);
        let value = (A[i] || 0) + r;
        if (value >= 10) {
            K = K + Math.floor(value / 10);
            value = value % 10;
        }
        
        if (i < 0) A = [value, ...A];
        else A[i] = value;
        i--;
    }

    return A;
};
console.log(addToArrayForm([1,2,0,0], 34));
console.log(addToArrayForm([2,7,4], 181));
console.log(addToArrayForm([2,1,5], 806));
console.log(addToArrayForm([9,9,9,9,9,9,9,9,9,9], 1));