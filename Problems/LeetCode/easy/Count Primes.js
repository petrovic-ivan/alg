/*

Count the number of prime numbers less than a non-negative number, n.

Example:

Input: 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

*/

var countPrimes = function (n) {
    const isComposite = [];
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (!isComposite[i]) {
            count++;
            for (let j = i * i; j < n; j += i) {
                isComposite[j] = true;
            }
        }
    }
    return count;
}

console.log(countPrimes(10000));