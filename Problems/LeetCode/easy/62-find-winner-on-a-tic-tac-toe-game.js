var tictactoe = function(moves) {
    if (moves.length < 5) return "Pending";
    let a_c = [], a_r = [], ad1 = 0, ad2 = 0;
    let b_c = [], b_r = [], bd1 = 0, bd2 = 0;

    for (let i = 0; i < moves.length; i++) {
        const m = moves[i];
        if (i % 2 === 0) {
            a_r[m[0]] ? a_r[m[0]]++ : a_r[m[0]] = 1;
            a_c[m[1]] ? a_c[m[1]]++ : a_c[m[1]] = 1;
            if (m[0] === m[1]) ad1++;
            if (m[0] === 2 - m[1]) ad2++;
        } else {
            b_r[m[0]] ? b_r[m[0]]++ : b_r[m[0]] = 1;
            b_c[m[1]] ? b_c[m[1]]++ : b_c[m[1]] = 1;
            if (m[0] === m[1]) bd1++;
            if (m[0] === 2 - m[1]) bd2++;
        }
    }
    if (ad1 === 3 || ad2 === 3) return 'A';
    for (let i = 0; i < 3; i++) {
        if (a_c[i] >= 3 || a_r[i] >= 3) return 'A';
        if (b_c[i] >= 3 || b_r[i] >= 3) return 'B';
    }
    if (bd1 === 3 || bd2 === 3) return 'B';
    return moves.length < 9 ? 'Pending' : 'Draw';
};

console.log(tictactoe([[2,0],[1,1],[0,2],[2,1],[1,2],[1,0],[0,0],[0,1]]));




