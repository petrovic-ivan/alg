/*

Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of instances that can be formed.

*/

let maxNumberOfBalloons = function(text) {
    const word = 'balloon';
    if ('balloon'.length > text.length) return 0;

    const counter = {b: 0, a: 0, l: 0, o:0, n: 0 };
    for (let i = 0; i < text.length; i++) {
        if (counter[text[i]] >= 0) counter[text[i]] += 1;
    }
     
    const wordDict = {b: 1, a: 1, l: 2, o:2, n: 1 };
    let max = counter.b;
    for (let i = 0; i < word.length; i++) {
        let min = Math.floor(counter[word[i]] / wordDict[word[i]]);
        if (max > min) max = min;
        if (!max) return 0;
     }
     return max;
};

console.log('Example 1: Result - ' + maxNumberOfBalloons("nlaebolko") + ' Expected: 1');
console.log('Example 2: Result - ' + maxNumberOfBalloons("loonbalxballpoon") + ' Expected: 2');
console.log('Example 3: Result - ' + maxNumberOfBalloons("leetcode") + ' Expected: 0');