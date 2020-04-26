/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    const INT_MAX = Math.pow(2,31) - 1;
    const INT_MIN = -Math.pow(2,31);
    str = str.trim()
    if(!str) return 0
   
    let isnum = true;
    const regexNum = /[0-9]+/;
    let result = "";
    let index = 0;
    let isNegative = false;
    
    if(str[index] === '-' || str[index] === '+'){
        isNegative = (str[index] === '-')?true:false;
        index++;
    }
  
    while(index !== str.length && isnum){
        if(!regexNum.test(str[index])){
            isnum = false;
        }else{
            result += str[index];
        }
        if (result > INT_MAX || result < INT_MIN) {
            return isNegative ? INT_MIN : INT_MAX
        }
        index++;   
    }
    return isNegative ? -result : +result;
};  

console.log(myAtoi("-+1"));