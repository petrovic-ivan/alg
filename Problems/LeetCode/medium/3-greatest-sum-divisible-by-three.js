/*

Given an array nums of integers, we need to find the maximum possible sum of elements of the array such that it is divisible by three.

Example 1:
    Input: nums = [3,6,5,1,8]
    Output: 18
    Explanation: Pick numbers 3, 6, 1 and 8 their sum is 18 (maximum sum divisible by 3).

Example 2:
    Input: nums = [4]
    Output: 0
    Explanation: Since 4 is not divisible by 3, do not pick any number.

Example 3:
    Input: nums = [1,2,3,4,4]
    Output: 12
    Explanation: Pick numbers 1, 3, 4 and 4 their sum is 12 (maximum sum divisible by 3).

Constraints:

1 <= nums.length <= 4 * 10^4
1 <= nums[i] <= 10^4

*/

let maxSumDivThree = function (nums) {
    let minOne = 10001;
    let minTwo = 10001;
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        let diff = nums[i] % 3;
        if (diff === 1) {
            minOne = Math.min(minOne, nums[i]);
            minTwo = Math.min(minTwo, minOne + nums[i]);
        }
        if (diff === 2) {
            minOne = Math.min(minOne, minTwo + nums[i]);
            minTwo = Math.min(minTwo, nums[i]);
        }
        sum += nums[i];
    }

    if (sum % 3 === 1) return sum - minOne;
    if (sum % 3 === 2) return sum - minTwo;
    return sum;
};

console.log(maxSumDivThree([3, 6, 5, 1, 8]).toString());
console.log(maxSumDivThree([4]).toString());
console.log(maxSumDivThree([1, 2, 3, 4, 4]).toString());
console.log(maxSumDivThree([2, 2, 2, 2, 2]).toString());