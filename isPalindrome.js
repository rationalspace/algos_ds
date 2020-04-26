// var isPalindrome = function(x){
//     let i = 0;
//     let j = x.length - 1;
//     if(x<0){return false;}
//     if(x<10){return true;}
//     x = x+'';
//     while(i<j){
//         if(x[i] != x[j]){
//             return false;
//         }else{
//             i++; j--;
//         }
//     }
//     return true;
// }
var isPalindrome = function(s) {
    let cleanStr = s.toLowerCase().replace(/[^\w]/g,'');
    let reversedStr = cleanStr.split("").reverse().join("");
    console.log(cleanStr);
    console.log(reversedStr)
    if(cleanStr === reversedStr){
        return true;
    }else{
        return false;
    }  
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));