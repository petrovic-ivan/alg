let oddCells = function(n, m, indices) {
    let matrix = [];
    for (let i = 0; i < n; i++) {
        matrix.push(new Int8Array(m));
    }

    for (let i = 0; i < indices.length; i++) {
        for (let j = 0; j < matrix[indices[i][0]].length; j++) {
            matrix[indices[i][0]][j]++;
        }     
        for (let j = 0; j < matrix.length; j++) {
            matrix[j][indices[i][1]]++;
        }    
    }
    let counter = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] % 2 !== 0) counter++;
        }
    }
    return counter;
};

let reconstructMatrix = function(upper, lower, colsum) {
    let matrix = [];
    for (let i = 0; i < 2; i++) {
        matrix.push(new Int8Array(colsum.length));
    }
    let upper_sum = 0;
    let lower_sum = 0;
    for (let i = 0; i < colsum.length; i++) {
        let sum = colsum[i];
        if (sum === 0) continue;
        if (sum === 2) {
            matrix[0][i]++;
            matrix[1][i]++;
            lower_sum++;
            upper_sum++;
        }
    }
    for (let i = 0; i < colsum.length; i++) {
        let sum = colsum[i];
        if (sum === 0) continue;
        if (sum === 1) {
            if (upper_sum === upper && lower_sum === lower) return [];
            if (upper_sum < upper) {
                matrix[0][i]++;
                upper_sum++;
                continue;
            }
            if (lower_sum < lower) {
                matrix[1][i]++;
                lower_sum++;
            }
        }
    }
    if (lower !== lower_sum || upper !== upper_sum) return [];
    return matrix;
};

console.log(reconstructMatrix(2, 3, [2,2,1,1]).toString());