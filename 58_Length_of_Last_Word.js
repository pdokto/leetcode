/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const splittedString = s.split(" ")
    for (let i = splittedString.length -1; i >= 0; i--){
        if(splittedString[i] !==''){
            return splittedString[i].length
        }
    }
};
