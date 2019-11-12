/*

Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place, and all letters reverse their positions.

Example 1:
    Input: "ab-cd"
    Output: "dc-ba"

Example 2:
    Input: "a-bC-dEf-ghIj"
    Output: "j-Ih-gfE-dCba"

Example 3:
    Input: "Test1ng-Leet=code-Q!"
    Output: "Qedo1ct-eeLg=ntse-T!"
 
Note:
    S.length <= 100
    33 <= S[i].ASCIIcode <= 122 
    S doesn't contain \ or "

*/
let reverseOnlyLetters = function (S) {
    let i = 0, j = S.length - 1;
    let c = [...S];
    let isAlphabetis = (c) => c >= 'A' && c <= 'Z' || c >= 'a' && c <= 'z'

    while (i < j) {
        while(!isAlphabetis(S[j]) && j > i) j--;
        while(!isAlphabetis(S[i]) && j > i) i++;
        c[i] = S[j];
        c[j] = S[i];
        i++;
        j--;
    }
    return c.join('');
};

console.log('Example 1: Result - ' + reverseOnlyLetters("ab-cd") + ' Expected: dc-ba');
console.log('Example 2: Result - ' + reverseOnlyLetters("a-bC-dEf-ghIj") + ' Expected: j-Ih-gfE-dCba');
console.log('Example 3: Result - ' + reverseOnlyLetters("Test1ng-Leet=code-Q!") + ' Expected: Qedo1ct-eeLg=ntse-T!');