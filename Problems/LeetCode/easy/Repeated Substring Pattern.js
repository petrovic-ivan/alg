/*

Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. 
You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.

Example 1:
    Input: "abab"
    Output: True
    Explanation: It's the substring "ab" twice.

Example 2:
    Input: "aba"
    Output: False

Example 3:
    Input: "abcabcabcabc"
    Output: True
    Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)

 */
var repeatedSubstringPattern = function(s) {
    if (s.length === 1) return false;
    let sub = '';
    let half = Math.floor(s.length / 2);
    for (let i = 0; i < half; i++) {
        sub += s[i];
        if (s.length % sub.length === 0) {
            const multiplier = Math.floor(s.length / sub.length);
            if (sub.repeat(multiplier) === s) return true;
        }
    }
    return false;
};
console.log(repeatedSubstringPattern("abab"));
console.log(repeatedSubstringPattern("aba"));
console.log(repeatedSubstringPattern("abcabcabcabc"));