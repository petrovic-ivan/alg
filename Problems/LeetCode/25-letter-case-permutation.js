/*

Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.  Return a list of all possible strings we could create.

Examples:
    Input: S = "a1b2"
    Output: ["a1b2", "a1B2", "A1b2", "A1B2"]

    Input: S = "3z4"
    Output: ["3z4", "3Z4"]

    Input: S = "12345"
    Output: ["12345"]
Note:

S will be a string with length between 1 and 12.
S will consist only of letters or digits.

*/

let letterCasePermutation = function (S) {

    const arr = [], word = '';

    let backtrack = (n, word) => {
        if (n === S.length) {
            arr.push(word);
            return;
        }
        if (parseInt(S[n]) >= 0) {
            word += S[n];
            backtrack(n + 1, word);
            word = word.slice(0, word.length - 1);
        } else {
            word += S[n].toLowerCase();
            backtrack(n + 1, word);
            word = word.slice(0, word.length - 1);
            word += S[n].toUpperCase();
            backtrack(n + 1, word);
            word = word.slice(0, word.length - 1);
        }
    }

    backtrack(0, word);
    return arr;
};

console.log('Example 1: Result - ' + letterCasePermutation("a1b2") + ' Expected: ["a1b2", "a1B2", "A1b2", "A1B2"]');
console.log('Example 2: Result - ' + letterCasePermutation("3z4") + ' Expected: ["3z4", "3Z4"]');
console.log('Example 3: Result - ' + letterCasePermutation("12345") + ' Expected: ["12345"]');