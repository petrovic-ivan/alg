// Dynamic programming solution. https://www.youtube.com/watch?v=ftpbBbtyxdE&list=PLSIpQf0NbcClDpWE58Y-oSJro_W3LO8Nb

var climbStairs = function (n) {
    if (n <= 1) return n;

    let a = 1;
    let b = 1;

    for (let i = 2; i <= n; i++) {
        let tmp = b;
        b = a + tmp;
        a = tmp;        
    }
    return b;
};

console.log(climbStairs(10));
console.log(climbStairs(3));