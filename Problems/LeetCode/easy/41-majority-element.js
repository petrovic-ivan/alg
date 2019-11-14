/*
 
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:
    Input: [3,2,3]
    Output: 3

Example 2:
    Input: [2,2,1,1,1,2,2]
    Output: 2

*/
let majorityElement = function (nums) {
    if (nums.length === 1) return nums[0];

    let counter = 0, majority = 0;
    for (let i = 0; i < nums.length; i++) {
        if (counter === 0) majority = nums[i];
        if (majority === nums[i]) counter++;
        else counter--;
    }
    return majority;
};

console.log('Example 1: Result - ' + majorityElement([6,5,5]) + ' Expected: 5');
console.log('Example 2: Result - ' + majorityElement([2, 2, 1, 1, 1, 2, 2]) + ' Expected: 2');