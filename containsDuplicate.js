/**
 * @param {number[]} nums
 * @return {boolean}
 * checks if every element in the array appears more than 1
 */
// var containsDuplicate = function(nums) {
//    let seen =[];
//    for(i=0;i<nums.length;i++){
//        let current = nums[i];
//        if(seen.includes(current)){
//             continue;
//        }else{
//            seen.push(current);
//            if(nums.lastIndexOf(current) === i){
//                return false;
//            }
//        }
//    }
//    return true; 
// };

var containsDuplicate = function(nums) {
    for(i=0;i<nums.length;i++){
        let current = nums[i];
        if(nums.lastIndexOf(current)!==i){
            return true;
        }
    } 
    return false;
};
console.log(containsDuplicate([1,2,3,4]));