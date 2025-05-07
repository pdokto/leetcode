/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (!pairs[char]) {
            stack.push(char);
        } else {
            if (!stack.length || stack.pop() !== pairs[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};
