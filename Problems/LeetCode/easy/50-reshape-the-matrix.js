/*

In MATLAB, there is a very useful function called 'reshape', which can reshape a matrix into a new one with different size but keep its original data.

You're given a matrix represented by a two-dimensional array, and two positive integers r and c representing the row number and column number of the wanted reshaped matrix, respectively.

The reshaped matrix need to be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the 'reshape' operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

Example 1:
    Input: 
    nums = [[1,2], [3,4]] r = 1, c = 4
    Output:  [[1,2,3,4]]
    Explanation:
    The row-traversing of nums is [1,2,3,4]. The new reshaped matrix is a 1 * 4 matrix, fill it row by row by using the previous list.
Example 2:
    Input: 
    nums = [[1,2], [3,4]] r = 2, c = 4
    Output: [[1,2], [3,4]]
    Explanation:
    There is no way to reshape a 2 * 2 matrix to a 2 * 4 matrix. So output the original matrix.
Note:
    The height and width of the given matrix is in range [1, 100].
    The given r and c are all positive.

*/
let matrixReshape = function (nums, r, c) {
    let a = nums.length;
    let b = nums[0].length;
    if (a === 1 && b === 1) return nums;
    if (a * b !== r * c) return nums;
    if (a === r && b === c) return nums;

    let result = [[]];
    let newRow = 0, newColumn = 0;
    for (let i = 0; i < a; i++) {
        for (let j = 0; j < b; j++) {
            result[newRow][newColumn] = nums[i][j];
            newColumn++;
            if (newColumn > c - 1 && newRow < r - 1) { 
                newRow++;
                result[newRow] = [];
                newColumn = 0;
            }    
        }
    }
    return result;
};

console.log('Example 1: Result - ' + matrixReshape([[1, 2], [3, 4]], 1, 4) + ' Expected: [[1,2,3,4]]');
console.log('Example 2: Result - ' + matrixReshape([[1, 2], [3, 4]], 2, 4) + ' Expected: [[1,2], [3,4]]');
console.log('Example 3: Result - ' + matrixReshape([[1, 2], [3, 4]], 4, 1) + ' Expected: [[1],[2],[3],[4]]');
