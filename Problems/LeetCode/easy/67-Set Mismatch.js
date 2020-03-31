/*

The set S originally contains numbers from 1 to n. 
But unfortunately, due to the data error, one of the numbers in the set got duplicated to another number in the set, which results in repetition of one number and loss of another number.

Given an array nums representing the data status of this set after the error. 
Your task is to firstly find the number occurs twice and then find the number that is missing. Return them in the form of an array.

Example 1:
    Input: nums = [1,2,2,4]
    Output: [2,3]

Note:
    The given array size will in the range [2, 10000].
    The given array's numbers won't have any order.

*/

var findErrorNums = function(nums) {
    const set = new Set();
    let sumV = 0;
    let sumD = 0;
    let dupe = 0;
    for (let i = 0; i < nums.length; i++) {
        if (!dupe && set.has(nums[i])) {
            dupe = nums[i];
        }
        set.add(nums[i]);
        sumV += i + 1;
        sumD += nums[i];
    }
    return [dupe, sumV - sumD + dupe];
};
console.log(findErrorNums([1,2,2,4]));
console.log(findErrorNums([2,2]));