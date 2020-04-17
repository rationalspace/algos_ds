//given a string of 2 chars, convert it into alternating by min deletions

function alternatingCharacters(s) {
    let sarr = s.split("");
    let deletions = 0;
    for(let i=0; i<sarr.length; i++){
        if(sarr[i] === sarr[i+1]){
            sarr[i] = '';
            deletions++;
        }
    }
    console.log(sarr.join(""));
    console.log(deletions);
}
alternatingCharacters('AAABBB');