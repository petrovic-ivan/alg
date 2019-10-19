/*

In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.

Return the element repeated N times.

Example 1:
    Input: [1,2,3,3]
    Output: 3

Example 2:
    Input: [2,1,2,5,3,2]
    Output: 2

Example 3:
    Input: [5,1,5,2,5,3,5,4]
    Output: 5

Note:

    4 <= A.length <= 10000
    0 <= A[i] < 10000
    A.length is even

*/

let repeatedNTimes = function(A) {
    const unique = new Set();
    for (let i = 0; i < A.length; i++) {
        const element = A[i];
        if (unique.has(element)) {
            return element;
        }
        unique.add(element);
    }
    return null;
};

console.log('Example 1: Result - ' + repeatedNTimes([1,2,3,3]) + ' Expected: 3');
console.log('Example 2: Result - ' + repeatedNTimes([2,1,2,5,3,2]) + ' Expected: 2');
console.log('Example 3: Result - ' + repeatedNTimes([5,1,5,2,5,3,5,4]) + ' Expected: 5');