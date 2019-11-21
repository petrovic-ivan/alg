/*

Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.

Example 1:
    Input: 5
    Output: True
    Explanation:
    The binary representation of 5 is: 101
Example 2:
    Input: 7
    Output: False
    Explanation:
    The binary representation of 7 is: 111.
Example 3:
    Input: 11
    Output: False
    Explanation:
    The binary representation of 11 is: 1011.
Example 4:
    Input: 10
    Output: True
    Explanation:
    The binary representation of 10 is: 1010.

*/

let hasAlternatingBits = function (n) {
    const base = n.toString(2);
    for (let i = 1; i < base.length; i++)
        if (base[i - 1] === base[i]) return false;
    return true;
};

console.log('Example 1: Result - ' + hasAlternatingBits(5) + ' Expected: True');
console.log('Example 2: Result - ' + hasAlternatingBits(7) + ' Expected: False');
console.log('Example 3: Result - ' + hasAlternatingBits(11) + ' Expected: False');
console.log('Example 4: Result - ' + hasAlternatingBits(10) + ' Expected: True');