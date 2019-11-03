/*

The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
    0 ≤ x, y < 231.

Example:
    Input: x = 1, y = 4

Output: 2

Explanation:
    1   (0 0 0 1)
    4   (0 1 0 0)
           ↑   ↑

The above arrows point to positions where the corresponding bits are different.

*/

let hammingDistance = function (x, y) {
    let xor = x ^ y;
    let count = 0;
    while (xor) {
        let modulus = xor % 2;
        xor = Math.floor(xor / 2);
        count += modulus;
    }
    return count;
};

console.log('Example 1: Result - ' + hammingDistance(1, 4) + ' Expected: 2');
console.log('Example 1: Result - ' + hammingDistance(3, 1) + ' Expected: 1');