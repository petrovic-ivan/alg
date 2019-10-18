/*

Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.

Example 1:
    Input: arr = [1,2,2,1,1,3]
    Output: true
    Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

Example 2:
    Input: arr = [1,2]
    Output: false

Example 3:
    Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
    Output: true

Constraints:

1 <= arr.length <= 1000
-1000 <= arr[i] <= 1000

*/

let uniqueOccurrences = function(arr) {
    const sum = {};
    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];
        if (sum[value]) {
            sum[value]++;
        } else {
            sum[value] = 1;
        }
    }
    const unique = new Set();
    for (const key in sum) {
        if (sum.hasOwnProperty(key)) {
            if (unique.has(sum[key])) {
                return false;
            }
            unique.add(sum[key]);
        }
    }
    return true;
};


console.log('Example 1: Result - ' + uniqueOccurrences([1,2,2,1,1,3]) + ' Is Equal: ' + (uniqueOccurrences([1,2,2,1,1,3]) === true));
console.log('Example 2: Result - ' + uniqueOccurrences([1,2]) + ' Is Equal: ' + (uniqueOccurrences([1,2]) === false));
console.log('Example 2: Result - ' + uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]) + ' Is Equal: ' + (uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]) === true));
