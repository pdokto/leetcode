/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let lastIndex = nums.length -1 
    for (let i = lastIndex; i >=0 ; i--) {
        if (nums[i] === val) {
            nums.splice(i,1)
        }
    }
    return nums.length
};
