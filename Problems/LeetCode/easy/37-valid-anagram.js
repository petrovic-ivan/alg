/*

Given two strings s and t, write a function to determine if t is an anagram of s.

Example 1:
    Input: s = "anagram", t = "nagaram"
    Output: true

Example 2:
    Input: s = "rat", t = "car"
    Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?

*/

let isAnagram = function(s, t) {
    
    if (s.length !== t.length) return false;

    const set = {};
    for (let i = 0; i < s.length; i++) {
        if (!set[s[i]]) set[s[i]] = 1;
        else set[s[i]]++;
        if (!set[t[i]])  set[t[i]] = -1;
        else set[t[i]]--;
    }
    
    return Object.values(set).every(v => v === 0); 
};

console.log('Example 1: Result - ' + isAnagram("anagram", "nagaram") + ' Expected: true');
console.log('Example 1: Result - ' + isAnagram("rat", "car") + ' Expected: false');