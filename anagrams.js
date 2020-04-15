// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
function anagrams(str1,str2){
    return cleanAndSort(str1) === cleanAndSort(str2);
}
function cleanAndSort(s){
    s.replace(/[^\w]/g,'').toLowerCase().split("").sort().join("");
}
console.log(anagrams('rail safety', 'fairy tales'));