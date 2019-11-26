let transpose = function(A) {
    if (A.length === 1 && A[0].length === 1) return A;
    const result = [];
    for (let i = 0; i < A[0].length; i++) {
        result[i] = [];
        for (let j = 0; j < A.length; j++) {
            result[i][j] = A[j][i];
        }
    }
    return result;
};

console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]));
console.log(transpose([[1,2,3],[4,5,6]]));