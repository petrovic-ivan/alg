/*

Given a string s of '(' , ')' and lowercase English characters. 

Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:

It is the empty string, contains only lowercase characters, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.
 
Example 1:
    Input: s = "lee(t(c)o)de)"
    Output: "lee(t(c)o)de"
    Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.

Example 2:
    Input: s = "a)b(c)d"
    Output: "ab(c)d"

Example 3:
    Input: s = "))(("
    Output: ""
    Explanation: An empty string is also valid.

Example 4:
    Input: s = "(a(b(c)d)"
    Output: "a(b(c)d)"

Constraints:

1 <= s.length <= 10^5
s[i] is one of  '(' , ')' and lowercase English letters.

*/

var minRemoveToMakeValid = function(s) {
    
    let counter = 0;
    let s1 = '';

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') counter++;
        if (counter === 0 && s[i] === ')') continue;
        if (s[i] === ')' && counter > 0) counter--;
        s1 += s[i];
    }
    
    counter = 0;
    let s2 = '';
    for (let i = s1.length - 1; i >= 0; i--) {
        if (s1[i] === ')') counter++;
        if (counter === 0 && s1[i] === '(') continue;
        if (s1[i] === '(' && counter > 0) counter--;
        s2 = s1[i] + s2;
    }

    return s2;
};

console.log('Example 1: Result - ' + minRemoveToMakeValid("lee(t(c)o)de)") + ' Expected: lee(t(c)o)de');
console.log('Example 2: Result - ' + minRemoveToMakeValid("a)b(c)d") + ' Expected: ab(c)d');
console.log('Example 3: Result - ' + minRemoveToMakeValid("))((") + ' Expected: ');
console.log('Example 4: Result - ' + minRemoveToMakeValid("(a(b(c)d)") + ' Expected: a(b(c)d)');
console.log('Example 5: Result - ' + minRemoveToMakeValid("())()(((") + ' Expected: "()()"');

