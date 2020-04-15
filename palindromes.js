let s = "mystring";
let r = s.split("").reduce((r,q)=>q+r);
if(s===r){
    console.log("is palindrome");
}else{
    console.log("is not palindrome");
}

function isPalindrome(str){
    return  str.split("").every((q, i) => {
        return q === str[str.length -1 -i];
    });
}
console.log(isPalindrome("abba"));