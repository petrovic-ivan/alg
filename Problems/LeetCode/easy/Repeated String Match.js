/*

Given two strings A and B, find the minimum number of times A has to be repeated such that B is a substring of it. If no such solution, return -1.

For example, with A = "abcd" and B = "cdabcdab".

Return 3, because by repeating A three times (“abcdabcdabcd”), B is a substring of it; and B is not a substring of A repeated two times ("abcdabcd").

Note:
The length of A and B will be between 1 and 10000.

*/
var repeatedStringMatch = function(A, B) {

    if (A.length >= B.length) { 
        if (A.indexOf(B) >= 0) return 1;
        if ((A + A).indexOf(B) >= 0) return 2;
        else return -1;
    }

    const r = Math.ceil(B.length / A.length);
    let A_r = A.repeat(r);
    if (A_r.indexOf(B) >= 0) return r;
    A_r = A.repeat(r + 1);
    if (A_r.indexOf(B) >= 0) return r + 1;

    return -1;
};

console.log(repeatedStringMatch("a", "aa"));
console.log(repeatedStringMatch("abcd", "cdabcdab"));