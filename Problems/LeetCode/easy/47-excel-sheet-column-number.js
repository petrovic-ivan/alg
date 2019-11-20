/*

Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:
    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
    ...
    
Example 1:
    Input: "A"
    Output: 1

Example 2:
    Input: "AB"
    Output: 28

Example 3:
    Input: "ZY"
    Output: 701

*/

let titleToNumber = function (s) {
    let column = 0;
    for (let i = 0; i < s.length; i++) {
        column *= 26;
        column += (s[i].charCodeAt() - 'A'.charCodeAt() + 1);
    }
    return column;
};

console.log('Example 1: Result - ' + titleToNumber("A") + ' Expected: 1');
console.log('Example 2: Result - ' + titleToNumber("AB") + ' Expected: 28');
console.log('Example 3: Result - ' + titleToNumber("ZY") + ' Expected: 701');
console.log('Example 3: Result - ' + titleToNumber("AAA") + ' Expected: 703');
