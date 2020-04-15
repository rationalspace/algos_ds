function reverseString(){
    let s = "mystring";
    let r = "";
    //approach 1
    r = s.split("").reduce((r,q)=>q+r);
    console.log(r);
    //approach 2
    r = s.split('').reverse().join("");
    console.log(r);
    //approach 3
    for(let q of s){
        r = q + r;
    }
    console.log(r);
}
module.exports.reverseString;
reverseString();