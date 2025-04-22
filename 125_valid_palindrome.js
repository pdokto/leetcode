/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let cleaned = s.toLowerCase().replace(/[^0-9a-z]/gi, '')
    let reversed = cleaned.split('').reverse().join('')
    return cleaned === reversed
};
