//given a string find the character that occurs the most in the string
let s = "abc bbbb123 aaa";
let map = {};
for(let c of s){
    if(map[c]){
        map[c]++;
    }else{
        map[c] = 1;
    }
}
let max = 0;
let maxChar = '';
for(let c in map){
    if(map[c]>max){
        max = map[c];
        maxChar = c;
    }
}
console.log(maxChar);