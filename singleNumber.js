/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let seen = [];
    for(i=0;i<nums.length;i++){
        if(seen.includes(nums[i])){
            continue;
        }else{
            seen.push(nums[i]);
        }
        if(nums.lastIndexOf(nums[i]) === i){
            return nums[i];
        }
    }
};
console.log(singleNumber([2,2,1]));