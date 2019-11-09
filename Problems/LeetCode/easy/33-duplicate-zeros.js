/*

Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written.

Do the above modifications to the input array in place, do not return anything from your function.

Example 1:
    Input: [1,0,2,3,0,4,5,0]
    Output: null
    Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

Example 2:
    Input: [1,2,3]
    Output: null
    Explanation: After calling your function, the input array is modified to: [1,2,3]

Note:

1 <= arr.length <= 10000
0 <= arr[i] <= 9

*/
let duplicateZeros = function (arr) {
    let i = 0, zero = 0;
    for (i = 0; i + zero < arr.length; i++) if (arr[i] === 0) zero++; 

    for (i -= 1; zero > 0; i--) {
        if (i + zero < arr.length) arr[i + zero] = arr[i];
        if (arr[i] === 0) {
            zero--;
            arr[i + zero] = arr[i];
        }
    }
};

let arr1 = [1, 0, 2, 3, 0, 4, 5, 0];
duplicateZeros(arr1);
console.log('Example 1: Result - ' + arr1 + ' Expected: 1,0,0,2,3,0,0,4');
let arr2 = [1,2,3];
duplicateZeros(arr2);
console.log('Example 2: Result - ' + arr2 + ' Expected: 1,2,3');