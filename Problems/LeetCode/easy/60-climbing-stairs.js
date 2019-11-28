// Dynamic programming solution. https://www.youtube.com/watch?v=ftpbBbtyxdE&list=PLSIpQf0NbcClDpWE58Y-oSJro_W3LO8Nb

var climbStairs = function (n) {
    if (n <= 2) return n;

    let first = 1;
    let second = 1;
    let sum = 0;
    for (let i = 2; i <= n; i++) {
        sum = first + second;
        first = second;
        second = sum;        
    }
    return sum;
};

console.log(climbStairs(4));
console.log(climbStairs(3));