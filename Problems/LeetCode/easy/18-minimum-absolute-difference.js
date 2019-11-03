/*

Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements. 

Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

a, b are from arr
a < b
b - a equals to the minimum absolute difference of any two elements in arr
 

Example 1:
    Input: arr = [4,2,1,3]
    Output: [[1,2],[2,3],[3,4]]
    Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.

Example 2:
    Input: arr = [1,3,6,10,15]
    Output: [[1,3]]

Example 3:
    Input: arr = [3,8,-10,23,19,-4,-14,27]
    Output: [[-14,-10],[19,23],[23,27]]
 

Constraints:
    2 <= arr.length <= 10^5
    -10^6 <= arr[i] <= 10^6

*/

const minimumAbsDifference2 = arr => {
    const RANGE = 10 ** 6;
    const data = new Int8Array(RANGE * 2 + 1);
    let min = max = arr[0];
    for (let i = 0; i < arr.length; ++i) {
        data[arr[i] + RANGE] = 1;
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }
    let ret = [];
    let diff = max - min;
    let prev = min + RANGE;
    for (let i = prev + 1; i <= max + RANGE; ++i) {
        if (data[i] === 0) continue;
        if (i - prev === diff) {
            ret.push([prev - RANGE, i - RANGE]);
        } else if (i - prev < diff) {
            diff = i - prev;
            ret = [[prev - RANGE, i - RANGE]];
        }
        prev = i;
    }
    return ret;
};

let minimumAbsDifference = function (arr) {
    const RANGE = 10 ** 6;
    let result = [];
    const sorted = new Int8Array(2 * RANGE + 1);
    let min = max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        sorted[RANGE + arr[i]]++;
        if (min > arr[i]) min = arr[i];
        if (max < arr[i]) max = arr[i];
    }

    let diff = max - min;
    let prev = min + RANGE;

    for (let i = prev + 1; i <= RANGE + max; i++) {
        if (sorted[i] === 0) continue;
        if (i - prev === diff) {
            result.push([prev - RANGE, i  - RANGE]);
        } else if ((i - prev) < diff) {
            result = [[prev - RANGE, i - RANGE]];
            diff = i - prev;
        }
        prev = i;
    }

    return result;
}

console.log('Example 1: Result - ' + minimumAbsDifference([4, 2, 1, 3]) + ' Expected: [[1,2],[2,3],[3,4]]');
console.log('Example 2: Result - ' + minimumAbsDifference([1, 3, 6, 10, 15]) + ' Expected: [[1,3]]');
console.log('Example 3: Result - ' + minimumAbsDifference([-14, -10, -4, 3, 8, 19, 23, 27]) + ' Expected: [[-14,-10],[19,23],[23,27]]');
