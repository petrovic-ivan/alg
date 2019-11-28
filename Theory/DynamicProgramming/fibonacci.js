/**
* Method : Recursive approach
* time complexity: O(2^n)
*/
let fib1 = (n) => {
    if (n < 2) return n;
    return fib1(n - 1) + fib1(n - 2);
}
console.log('fib1: ' + fib1(10));

/**
 * Method: Top down approach 
 * time complexity - O(n)
 * space complexity - O(n)
 */
let fib2 = (n) => {
    let cache = [];
    let recursion = (num) => {
        if (num< 2) return num;
        if (cache[num]) return cache[num];

        cache[num] = fib2(num - 1) + fib2(num - 2);
        return cache[num];
    }

    return recursion(n);
}
console.log('fib2: ' + fib2(10));


/**
 * Method: Bottom up arrpoach
 * time complexity - O(n)
 * space complexity - O(n)
 */
let fib3 = (n) => {
    let cache = [];

    cache[0] = 0;
    cache[1] = 1;

    for (let i = 2; i <= n; i++) cache[i] = cache[i - 1] + cache[i - 2];

    return cache[n];
}
console.log('fib3: ' + fib3(10));

/**
 * Method: 
 * time complexity - O(n)
 * space complexity - O(1)
 */
let fib4 = (n) => {
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
}
console.log('fib4: ' + fib4(10));
