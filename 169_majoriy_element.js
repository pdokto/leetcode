/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort()
    let counter = 1

    for (let i = 0; i < nums.length; i++){
        if(nums[i] === nums[i+1]){
            counter++
        } else {
            counter = 1
        }
        if (counter > nums.length /2) {
            return nums[i]
        }
    }
};

// optimal solution seems to be Boyer-Moore majority vote algorithm
// ts
function majorityElement(nums: number[]): number {
    let candidate;
    let count = 0;
    
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        
        count += (num === candidate) ? 1 : -1
    }
    
    return candidate;
};
