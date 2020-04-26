/*Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.*/
/**
 * @param {string} s
 * @return {number}
 */
// var firstUniqChar = function(s) {
//     if(s.length == 1){ return 0}
//     for(let i =0;i<s.length;i++){
//         let r = s.split("");
//         r.splice(i,1);
//         r.join("");
//         if(r.includes(s[i])){
//             continue;
//         }else{
//             return i;
//         }
//     }
//     return -1;
// };
var firstUniqChar = function(s){
    var hashmap = {}
    for(i=0;i<s.length;i++){
        if(hashmap[s[i]]){
            hashmap[s[i]]++;
        }else{
            hashmap[s[i]] = 1;
        }
    }
    for(let i =0;i<s.length;i++){
        if(hashmap[s[i]] === 1){
            return i
        }
    }
    return -1
}
console.log(firstUniqChar("lovel"));