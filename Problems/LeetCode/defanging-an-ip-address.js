/*
    Given a valid (IPv4) IP address, return a defanged version of that IP address.
    A defanged IP address replaces every period "." with "[.]".

    Example 1:
        Input: address = "1.1.1.1"
        Output: "1[.]1[.]1[.]1"

    Example 2:
        Input: address = "255.100.50.0"
        Output: "255[.]100[.]50[.]0"
*/


// Used `replace()` function.
let defangIPaddr = function(address) {
    return address.replace(/\./g, '[.]');
};

console.log('Example 1: Result - ' + defangIPaddr('1.1.1.1') + ' Is Equal: ' +  (defangIPaddr('1.1.1.1') === '1[.]1[.]1[.]1'));
console.log('Example 2: Result - ' + defangIPaddr('255.100.50.0') + ' Is Equal: ' +  (defangIPaddr('1.1.1.1') === '255[.]100[.]50[.]0'));


// Used manual approach with for loop.
let defangIPaddr2 = function(address) {
    let newaddress = '';
    for (let i = 0; i < address.length; i++) {
        if (address[i] !== '.') {
            newaddress += address[i];
        } else {
            newaddress += '[.]';
        }
    }
    return newaddress;
};

console.log('Example 1: Result - ' + defangIPaddr2('1.1.1.1') + ' Is Equal: ' +  (defangIPaddr2('1.1.1.1') === '1[.]1[.]1[.]1'));
console.log('Example 2: Result - ' + defangIPaddr2('255.100.50.0') + ' Is Equal: ' +  (defangIPaddr2('255.100.50.0') === '255[.]100[.]50[.]0'));