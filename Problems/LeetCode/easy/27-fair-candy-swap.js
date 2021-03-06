/*

Alice and Bob have candy bars of different sizes: A[i] is the size of the i-th bar of candy that Alice has, and B[j] is the size of the j-th bar of candy that Bob has.

Since they are friends, they would like to exchange one candy bar each so that after the exchange, they both have the same total amount of candy.  (The total amount of candy a person has is the sum of the sizes of candy bars they have.)

Return an integer array ans where ans[0] is the size of the candy bar that Alice must exchange, and ans[1] is the size of the candy bar that Bob must exchange.

If there are multiple answers, you may return any one of them.  It is guaranteed an answer exists.

 

Example 1:
    Input: A = [1,1], B = [2,2]
    Output: [1,2]

Example 2:
    Input: A = [1,2], B = [2,3]
    Output: [1,2]

Example 3:
    Input: A = [2], B = [1,3]
    Output: [2,3]

Example 4:
    Input: A = [1,2,5], B = [2,4]
    Output: [5,4]

Solution = 
    Sa - X + Y = Sb - Y + X
    Y = X + (Sb - Sa)/2
*/
let fairCandySwap = function (A, B) {
    let sumA = 0, sumB = 0;
    for (let i = 0; i < A.length; i++) sumA += A[i];
    for (let i = 0; i < B.length; i++) sumB += B[i];

    let diff = (sumB - sumA) / 2;
    let setB = new Set(B);
    for (let i = 0; i < A.length; i++) {
        const a = A[i];
        if (setB.has(a + diff)) {
            return [a, a + diff];
        }
    }
};

console.log('Example 1: Result - ' + fairCandySwap([1, 1], [2, 2]) + ' Expected: [1,2]');
console.log('Example 2: Result - ' + fairCandySwap([1, 2], [2, 3]) + ' Expected: [1,2]');
console.log('Example 3: Result - ' + fairCandySwap([2], [1, 3]) + ' Expected: [2,3]');
console.log('Example 4: Result - ' + fairCandySwap([1, 2, 5], [2, 4]) + ' Expected: [5,4]');

