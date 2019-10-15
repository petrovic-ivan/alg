/* 

You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  
Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.
The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: J = "aA", S = "aAAbbbb"
Output: 3
Example 2:

Input: J = "z", S = "ZZ"
Output: 0
Note:

S and J will consist of letters and have length at most 50.
The characters in J are distinct.

*/

let numJewelsInStones1 = function(J, S) {
    let result = 0;
    for (let i = 0; i < S.length; i++) {
        if (J.indexOf(S.charAt(i)) >= 0 ) {
            result++;
        }
    }
    return result;
};

let numJewelsInStones2 = function(J, S) {
    let chars = {};
    for (let i = 0; i < S.length; i++) {
        let charCode = S[i].charCodeAt();
        if (chars[charCode]) {
            chars[charCode]++;
        } else {
            chars[charCode] = 1;
        }
    }

    let counter = 0;
    for (let i = 0; i < J.length; i++) {
        let charSum = chars[J[i].charCodeAt()];
        if (charSum) {
            counter += charSum;
        }
    }

    return counter;
};

let numJewelsInStones3 = function(J, S) {
    return S.replace(new RegExp(`[^${J}]`, 'g'), '').length;
};

console.log('Example 1: Result - ' + numJewelsInStones1('aA', 'aAAbbbb') + ' Is Equal: ' +  (numJewelsInStones1('aA', 'aAAbbbb') === 3));
console.log('Example 2: Result - ' + numJewelsInStones1('z', 'ZZ') + ' Is Equal: ' +  (numJewelsInStones1('z', 'ZZ') === 0));
console.log('\n');

console.log('Example 1: Result - ' + numJewelsInStones2('aA', 'aAAbbbb') + ' Is Equal: ' +  (numJewelsInStones2('aA', 'aAAbbbb') === 3));
console.log('Example 2: Result - ' + numJewelsInStones2('z', 'ZZ') + ' Is Equal: ' +  (numJewelsInStones2('z', 'ZZ') === 0));
console.log('\n');

console.log('Example 1: Result - ' + numJewelsInStones3('aA', 'aAAbbbb') + ' Is Equal: ' +  (numJewelsInStones3('aA', 'aAAbbbb') === 3));
console.log('Example 2: Result - ' + numJewelsInStones3('z', 'ZZ') + ' Is Equal: ' +  (numJewelsInStones3('z', 'ZZ') === 0));
console.log('\n');
