/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zero = 0;
    for(let i=0; i < nums.length;i++){
        if(nums[i] === 0){
            nums.splice(i,1);
            zero++;
            i--;
        }
    }
    while(zero > 0){
        nums.push(0);
        zero--;
    }  
    return nums;
};
console.log(moveZeroes([0,1,0]));