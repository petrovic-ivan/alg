/*
Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

Example 1:
    Input: "Hello"
    Output: "hello"

Example 2:
    Input: "here"
    Output: "here"

Example 3:
    Input: "LOVELY"
    Output: "lovely"
*/

var toLowerCase = function(str) {
    let lowercase = '';
    for (let i = 0; i < str.length; i++) {
        let value = str[i];
        if (value >= 'A' && value <= 'Z') {
            value = String.fromCharCode(value.charCodeAt() + 32)[0];
        }
        lowercase += value;
    }
    return lowercase;
};

console.log('Example 1: Result - ' + toLowerCase('Hello') + ' Is Equal: ' + (toLowerCase('Hello') === 'hello'));
console.log('Example 2: Result - ' + toLowerCase('here') + ' Is Equal: ' + (toLowerCase('here') === 'here'));
console.log('Example 2: Result - ' + toLowerCase('LOVELY') + ' Is Equal: ' + (toLowerCase('LOVELY') === 'lovely'));