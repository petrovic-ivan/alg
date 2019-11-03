/*

Given two arrays, write a function to compute their intersection.

Example 1:
    Input: nums1 = [1,2,2,1], nums2 = [2,2]
    Output: [2]

Example 2:
    Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
    Output: [9,4]
Note:
    Each element in the result must be unique.
    The result can be in any order.

*/
let intersection = function (nums1, nums2) {
    let res = new Set();

    for (let i = 0; i < nums1.length; i++) {
        if (!res.has(nums1[i]) && nums2.indexOf(nums1[i]) >= 0) {
            res.add(nums1[i]);
        }
    }
    return [...res];
};

console.log('Example 1: Result - ' + intersection([1,2,2,1], [2,2]) + ' Expected: [2]');
console.log('Example 2: Result - ' + intersection([4,9,5], [9,4,9,8,4]) + ' Expected: [9,4]');
