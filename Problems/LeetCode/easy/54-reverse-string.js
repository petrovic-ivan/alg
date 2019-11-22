let reverseString = function(s) {
    const l =  s.length / 2;
    for (let i = 0; i < l; i++) {
        const tmp = s[i];
        s[i] = s[s.length - 1 - i];
        s[s.length - 1 - i] = tmp;
    }
    return s;
};

console.log('Example 1: Result - ' + reverseString(["h","e","l","l", "o"]) + ' Expected: 6');