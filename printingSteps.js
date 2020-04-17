// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'
function printSteps(n){
    let stepnum = 1;
    while(stepnum<=n){//for each step
        let j = 1;
        let str = '';
        for(let j=1; j<=n; j++){
            if(j<=stepnum){
                str += '#';
            }else{
                str += ' ';
            }
        }
        console.log(str);
        stepnum++;
    }
}
printSteps(4);