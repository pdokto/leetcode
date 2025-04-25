/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let isSubsequence = true
    let shorty = t

    for (let i= 0; i < s.length; i++){
        let index = shorty.indexOf(s[i])
        if (index === -1) {
            return false
        } else {
            shorty = shorty.substring(index+1)
        }
    }
    return isSubsequence
};
