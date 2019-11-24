var countServers = function(grid) {
    let result = 0;
    let m = grid.length;
    let n = grid[0].length;
    
    let row_sums = [];
    for (let i = 0; i < m; i++) {
        let row_sum = 0;
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) row_sum++; 
        }

        if (row_sum > 1) { 
            row_sums.push(row_sum);
        } else {
            row_sums.push(0);
        }
    }

    for (let i = 0; i < n; i++) {
        let col_sum = 0;
        for (let j = 0; j < m; j++) {
            if (grid[j][i] === 1) { 
                col_sum++; 
            }
        }

        if (col_sum > 1) { 
            for (let j = 0; j < m; j++) {
            row_sums.push(0);
                if (grid[j][i] === 1 && row_sums[j] > 1) { 
                        col_sum--; 
                }
            }
            result += col_sum;
        }
    }
    result += row_sums.reduce((a, b) => a + b);
    return result;
};

console.log(countServers([[1,1,0,0],[0,0,1,0],[0,0,1,0],[0,0,0,1]]));
console.log(countServers([[1,0],[1,1]]));