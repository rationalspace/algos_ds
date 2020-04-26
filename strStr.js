/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * Input: haystack = "hello", needle = "ll"
 */
var strStr = function(haystack, needle) {
   if(needle.length == 0) return  0;
   let i;
   for(i = 0; i< haystack.length; i++){
        if(needle[0] == haystack[i]){
            let j = 0;
            while(j<needle.length){ //till we find the whole needle
                if(needle[j] == haystack[i]){
                    j++; i++;
                    continue;
                }else{
                    i = i-j;
                    break;
                }
            } 
            if(j==needle.length){ //found the needle
                i = i-j;
                return i;
            }
        }else{
            continue;
        }
   }
   if(i==haystack.length){ //no needle found
        return -1;
   }    
};
console.log(strStr("","d"));