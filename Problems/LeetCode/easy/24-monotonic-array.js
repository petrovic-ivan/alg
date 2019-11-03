/*

An array is monotonic if it is either monotone increasing or monotone decreasing.

An array A is monotone increasing if for all i <= j, A[i] <= A[j].  An array A is monotone decreasing if for all i <= j, A[i] >= A[j].

Return true if and only if the given array A is monotonic.

*/

let isMonotonic = function(A) {
    const inc = A[0] > A[A.length - 1];
    for (let i = 1; i < A.length; i++) {
        if (A[i - 1] !== A[i] && (A[i - 1] < A[i] === inc)) {
            return false;
        }        
    }
    return true;
};
console.log('Example 1: Result - ' + isMonotonic([1,2,2,3]) + ' Expected: true');
console.log('Example 2: Result - ' + isMonotonic([6,5,4,4]) + ' Expected: true');
console.log('Example 3: Result - ' + isMonotonic([1,3,2]) + ' Expected: false');
console.log('Example 4: Result - ' + isMonotonic([1,2,4,5]) + ' Expected: true');
console.log('Example 5: Result - ' + isMonotonic([1,1,1]) + ' Expected: true');