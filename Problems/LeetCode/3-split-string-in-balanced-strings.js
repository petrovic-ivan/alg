/*
    Balanced strings are those who have equal quantity of 'L' and 'R' characters.

    Given a balanced string s split it in the maximum amount of balanced strings.

    Return the maximum amount of splitted balanced strings.

    Example 1:
        Input: s = "RLRRLLRLRL"
        Output: 4
        Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

    Example 2:
        Input: s = "RLLLLRRRLR"
        Output: 3
        Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.

    Example 3:
        Input: s = "LLLLRRRR"
        Output: 1
        Explanation: s can be split into "LLLLRRRR".

    Constraints:
        1 <= s.length <= 1000
        s[i] = 'L' or 'R'
*/


let balancedStringSplit = function (s) {
    let result = 0, equal = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'L') {
            equal++;
        } else {
            equal--;
        }

        if (equal === 0) {
            result++;
        }
    }
    return result;
}

console.log('Example 1: Result - ' + balancedStringSplit('RLRRLLRLRL') + ' Is Equal: ' + (balancedStringSplit('RLRRLLRLRL') === 4));
console.log('Example 2: Result - ' + balancedStringSplit('RLLLLRRRLR') + ' Is Equal: ' + (balancedStringSplit('RLLLLRRRLR') === 3));
console.log('Example 3: Result - ' + balancedStringSplit('LLLLRRRR') + ' Is Equal: ' + (balancedStringSplit('LLLLRRRR') === 1));
console.log('Example 4: Result - ' + balancedStringSplit('LLLLLRRRR'));
console.log('\n');