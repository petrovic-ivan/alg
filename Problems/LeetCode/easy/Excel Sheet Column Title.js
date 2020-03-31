/*

Given a positive integer, return its corresponding column title as appear in an Excel sheet.

For example:

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB 
    ...
Example 1:
    Input: 1
    Output: "A"

Example 2:
    Input: 28
    Output: "AB"

Example 3:
    Input: 701
    Output: "ZY"

*/

var convertToTitle = function (n) {
    if (n <= 0) return '';
    let result = '';
    
    while (n >= 1) {
        const r = n % 26 > 0 ? n % 26 : 26;
        result = String.fromCharCode(r + 64) + result;
        n = Math.floor((n - r) / 26);
    }
    return result;
};

console.log(convertToTitle(1));
console.log(convertToTitle(28));
console.log(convertToTitle(701));
console.log(convertToTitle(1000));
console.log(convertToTitle(52));
console.log(convertToTitle(53));