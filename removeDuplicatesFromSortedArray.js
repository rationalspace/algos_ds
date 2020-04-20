/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums){
   for(i=0; i <= nums.length -1 ; i++){
        while(nums[i] === nums[i+1]){
            if(nums[i] === nums[i+1]){
                nums.splice(i,1);
            }
        }
    }
    return nums.length;
};
var len = removeDuplicates([0,0,0,1,1,1,2,2,3,3,4]);
console.log(len);