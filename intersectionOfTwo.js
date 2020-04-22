/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let common = [];
    while(nums1.length>0 && nums2.length>0){
        let element = nums1[0];
        if(nums2.indexOf(element) !== -1){
            common.push(element);
            nums2.splice(nums2.indexOf(element),1);    
        }
        nums1.splice(0,1);
    }  
    return common;
};
console.log(intersect([1,2,2,1],[2,2]));