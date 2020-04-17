// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '00 01 02 03 04   #  '
//       '10 11 12 13 14  ### '
//       '20 21 22 23 24 #####'
function pyramid(n){
    let row = 0;
    let hashes = 1;
    let maxhash = 2*n - 1;
    const midpoint = Math.floor((2*n - 1 )/2);
    while(row<n){
        let str = '';
        for(let col=0 ; col<maxhash ; col++){
            if(midpoint+row >= col && midpoint - row <= col){
                str += '#';
            }else{
                str += ' ';
            }
        }
        console.log(str);
        row++;
    }

}
pyramid(4);