/*

Given a word, you need to judge whether the usage of capitals in it is right or not.

We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".
Otherwise, we define that this word doesn't use capitals in a right way.

Example 1:
    Input: "USA"
    Output: True
 
Example 2:
    Input: "FlaG"
    Output: False

*/

let detectCapitalUse = function (word) {
    if (word.length < 2) return true;
    if (word === word.toUpperCase()) return true;
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        const character = word[i];
        if (character !== character.toLowerCase()) count++;
        if (count > 1 && count < i + 1) return false;
    }
    return count === word.length || (count === 1 && word[0] !== word[0].toLowerCase()) || count === 0;
};

console.log('Example 1: Result - ' + detectCapitalUse("USA") + ' Expected: True');
console.log('Example 2: Result - ' + detectCapitalUse("FlaG") + ' Expected: False');
console.log('Example 3: Result - ' + detectCapitalUse("ffffffffffffffffffffF") + ' Expected: False');
