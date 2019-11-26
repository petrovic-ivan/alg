/*

Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:
    Input: [2,2,1]
    Output: 1

Example 2:
    Input: [4,1,2,1,2]
    Output: 4

*/
let singleNumber = function(nums) {
    let res = nums[0];
    for (let i = 1; i < nums.length; i++)
        res = res ^ nums[i];
    return res;
};

console.log('Example 1: Result - ' + singleNumber([2,2,1]) + ' Expected: 1');
console.log('Example 2: Result - ' + singleNumber([4,1,2,1,2]) + ' Expected: 4');