var isPowerOfThree = function(n) {
    if(n<=3) return false;
    while(n>1){
        if(n%3==0) n/=3
        else break
    }
    if(n==1) return true
    return false
}