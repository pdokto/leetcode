/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let ranges = []
    let length = nums.length
    let a = 0

    for (let i = 0; i < length; i++){
        if ( i === length -1 || nums[i] +1 !== nums[i +1]){
            if (a === i) {
                ranges.push(`${nums[i]}`);
            } else {
                ranges.push(`${nums[a]}->${nums[i]}`);
            }
            a = i + 1
        }
    }
    return ranges
};
