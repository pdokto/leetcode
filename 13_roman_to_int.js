/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    romanNumbers = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};

    let sum = 0
    for (let i=0; i < s.length; i++){
        romanNumbers[s[i]] < romanNumbers[s[i+1]] ? sum -= romanNumbers[s[i]] : sum += romanNumbers[s[i]] 
    }
    return sum
};
