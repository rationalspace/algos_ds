//brute force - compare one element with every other element
// var twoSum = function(nums,target){
//     for(let i =0 ; i <nums.length; i++){
//         for(let j=0 ; j<nums.length ; j++){
//             if(i==j){
//                 continue;
//             }
//             if(nums[i]+nums[j] == target){
//                 return [i,j];
//             }
//         }
//     }
//     return null;
// }
//
var twoSum = function(nums,target){
    for(let i=0; i<nums.length; i++){
        let diff = target - nums[i];
        let second = nums.indexOf(diff);
        if(second != -1){
            return [i,second];
        }
    }
    return null;
}


var indices = twoSum([2,7,11,15],9);
console.log(indices);