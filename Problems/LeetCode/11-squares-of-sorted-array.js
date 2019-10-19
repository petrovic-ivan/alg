/*

Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

Example 1:
    Input: [-4,-1,0,3,10]
    Output: [0,1,9,16,100]

Example 2:
    Input: [-7,-3,2,3,11]
    Output: [4,9,9,49,121]
 
Note:
    1 <= A.length <= 10000
    -10000 <= A[i] <= 10000

A is sorted in non-decreasing order.

*/
let sortedSquares = function (A) {
    let arr = [], leftI = 0, rightI = A.length - 1;
    for (let i = rightI; i >= 0; i--) {
        let right = A[rightI];
        let left = A[leftI]
        if (Math.abs(left) > Math.abs(right)) {
            arr[i] = left * left;
            leftI++;
        } else {
            arr[i] = right * right;
            rightI--;
        }
    }
    return arr;
}

console.log('Example 1: Result - ' + sortedSquares([-4, -1, 0, 3, 10]) + ' Expected: 0,1,9,16,100');
console.log('Example 2: Result - ' + sortedSquares([-7, -3, 2, 3, 11]) + ' Expected: 4,9,9,49,121');