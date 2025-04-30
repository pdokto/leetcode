/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let mappedPattern = new Map()
    let mappedS = new Map()
    let sArray = s.split(" ")

    if(pattern.length !== sArray.length) {
        return false
    }

    for(let i= 0; i < pattern.length; i++) {

        if(mappedS.has(sArray[i]) && mappedS.get(sArray[i]) !== pattern[i]){
            return false
        }

        if (mappedPattern.has(pattern[i]) && mappedPattern.get(pattern[i]) !== sArray[i]){
            return false
        }

        mappedPattern.set(pattern[i], sArray[i])
        mappedS.set(sArray[i], pattern[i])
    }
    return true
};
