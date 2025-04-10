/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let firstIndex = m - 1
    let secondIndex = n - 1
    let i = m + n - 1

    while(secondIndex >= 0) {
        let firstValue = nums1[firstIndex]
        let secondValue = nums2[secondIndex]

        if (firstValue > secondValue){
            nums1[i] = firstValue
            i--
            firstIndex --
        } else {
            nums1[i] = secondValue
            i--
            secondIndex --
        }
    }
};
