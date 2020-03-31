var convertToBase7 = function (num) {
    let i = 0;
    let result = 0;
    while (num != 0) {
        let q = Math.trunc(num / 7);
        let r = num % 7;
        num = q;
        result += r * Math.pow(10, i);
        i++;
    }
    return result.toString();
};

console.log(convertToBase7(100));
console.log(convertToBase7(-7));