/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numsMap = new Map()

    for(let i = 0; i < nums.length; i++){
        let complement = target - nums[i]
    
        if(numsMap.has(complement)) {
            return [numsMap.get(complement), i]
        }
        numsMap.set(nums[i], i)
    }
};
