/*

You are given two strings s1 and s2 of equal length consisting of letters "x" and "y" only. Your task is to make these two strings equal to each other. You can swap any two characters that belong to different strings, which means: swap s1[i] and s2[j].

Return the minimum number of swaps required to make s1 and s2 equal, or return -1 if it is impossible to do so.

Example 1:
    Input: s1 = "xx", s2 = "yy"
    Output: 1

    Explanation: 
        Swap s1[0] and s2[1], s1 = "yx", s2 = "yx".
        
Example 2: 
    Input: s1 = "xy", s2 = "yx"
    Output: 2

    Explanation: 
        Swap s1[0] and s2[0], s1 = "yy", s2 = "xx".
        Swap s1[0] and s2[1], s1 = "xy", s2 = "xy".
        Note that you can't swap s1[0] and s1[1] to make s1 equal to "yx", cause we can only swap chars in different strings.

Example 3:
    Input: s1 = "xx", s2 = "xy"
    Output: -1

Example 4:
    Input: s1 = "xxyyxyxyxx", s2 = "xyyxyxxxyx"
    Output: 4

Constraints:

1 <= s1.length, s2.length <= 1000
s1, s2 only contain 'x' or 'y'.

*/

let minimumSwap = function (s1, s2) {
    if (s1.length !== s2.length) {
        return -1;
    }
    let x_y = 0, y_x = 0;
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] === s2[i]) continue;

        if (s1[i] === 'x') x_y++;
        else y_x++;
    }

    if ((x_y + y_x) % 2 == 1) return -1;

    let result = 0;
    result = Math.floor(x_y / 2);
    result += Math.floor(y_x / 2);

    result += x_y % 2;
    result += y_x % 2;
    return result;
};

console.log('Example 1: Result - ' + minimumSwap("xx", "yy") + ' Expected: 1');
console.log('Example 2: Result - ' + minimumSwap("xy", "yx") + ' Expected: 2');
console.log('Example 3: Result - ' + minimumSwap("xx", "xy") + ' Expected: -1');
console.log('Example 4: Result - ' + minimumSwap("xxyyxyxyxx", "xyyxyxxxyx") + ' Expected: 4');
