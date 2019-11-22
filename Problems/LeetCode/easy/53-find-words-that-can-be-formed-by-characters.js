/*

You are given an array of strings words and a string chars.

A string is good if it can be formed by characters from chars (each character can only be used once).

Return the sum of lengths of all good strings in words.

Example 1:
    Input: words = ["cat","bt","hat","tree"], chars = "atach"
    Output: 6
    Explanation: 
    The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.

Example 2:
    Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
    Output: 10
    Explanation: 
    The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.

Note:

1 <= words.length <= 1000
1 <= words[i].length, chars.length <= 100
All strings contain lowercase English letters only.

*/
let countCharacters = function (words, chars) {
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let charset = chars;
        for (let j = 0; j < word.length; j++) {
            if (charset.indexOf(word[j]) < 0) break;
            charset = charset.replace(word[j], '');
        }
        if (charset.length + word.length === chars.length) count+= word.length; 
    }
    return count;
};

console.log('Example 1: Result - ' + countCharacters(["cat", "bt", "hat", "tree"], "atach") + ' Expected: 6');
console.log('Example 2: Result - ' + countCharacters(["hello", "world", "leetcode"], "welldonehoneyr") + ' Expected: 10');