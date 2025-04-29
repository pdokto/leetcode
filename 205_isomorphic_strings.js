/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let mappedS = new Map()
    let mappedT = new Map()

    for(let i = 0; i < s.length; i++){
        let letterInS = s[i]
        let letterInT = t[i]

        if(mappedS.has(letterInS) && mappedS.get(letterInS) !== letterInT){
            return false
        }

        if (mappedT.has(letterInT) && mappedT.get(letterInT) !== letterInS){
            return false
        }

        mappedS.set(letterInS, letterInT)
        mappedT.set(letterInT, letterInS)
    }

    return true
};
