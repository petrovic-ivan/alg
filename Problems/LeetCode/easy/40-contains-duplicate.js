/*

Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example 1:
    Input: [1,2,3,1]
    Output: true

Example 2:
    Input: [1,2,3,4]
    Output: false

Example 3:
    Input: [1,1,1,3,3,4,3,2,4,2]
    Output: true

*/

let containsDuplicate = function(nums) {
    let unique = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (unique.has(nums[i])) return true;
        unique.add(nums[i]);
    }
    return false;
};

console.log('Example 1: Result - ' + containsDuplicate([1,2,3,1]) + ' Expected: true');
console.log('Example 2: Result - ' + containsDuplicate([1,2,3,4]) + ' Expected: fasle');
console.log('Example 3: Result - ' + containsDuplicate([1,1,1,3,3,4,3,2,4,2]) + ' Expected: true');