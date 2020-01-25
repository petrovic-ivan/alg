/*

Given a non-empty array of integers, return the third maximum number in this array. 
If it does not exist, return the maximum number. The time complexity must be in O(n).

Example 1:
    Input: [3, 2, 1]

    Output: 1

    Explanation: The third maximum is 1.
Example 2:
    Input: [1, 2]

    Output: 2

    Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
Example 3:
    Input: [2, 2, 3, 1]

    Output: 1

Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.

*/
var thirdMax = function(nums) {
    let a = 0, b = 0, c = 0;

    for (let i = 0; i < nums.length; i++) {
        let current = nums[i];
        if (current === a || current === b || current === c) continue;
        if (a < current) {
            c = b;
            b = a;
            a = current;
        } else if (b < current) {
            c = b;
            b = current;
        } else if (c < current) {
            c = current;
        }           
    }

    return c;
};
console.log(thirdMax([2, 2, 3, 1]));