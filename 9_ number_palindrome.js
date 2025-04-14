/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   let original = x 
   let reversed = 0
    while (x !== 0) {
        let lastDigit = x%10
        reversed = (reversed * 10) + lastDigit
        if (x>0){
            x = Math.floor(x /10)
        } else {
            return false
        }
    }
    return original === reversed
}


// Solition without the use of strings
