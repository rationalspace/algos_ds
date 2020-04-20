var isPalindrome = function(x){
    let i = 0;
    let j = x.length - 1;
    if(x<0){return false;}
    if(x<10){return true;}
    x = x+'';
    while(i<j){
        if(x[i] != x[j]){
            return false;
        }else{
            i++; j--;
        }
    }
    return true;
}
console.log(isPalindrome(10));