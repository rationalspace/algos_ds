// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'
function capitalise(s){
    let ns = [];
    for(let w of s.split(" ")){
        ns.push(w[0].toUpperCase() + w.slice(1));
    }
    return ns.join(" ");
}
console.log(capitalise('look, it is working!'));