/*
Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.
*/
/**
 * @param {character[][]} board
 * @return {boolean}
 */
// 00 01 02  03 04 05
// 10 11 12  13 14 15
// 20 21 22  23 24 25

var isValidSudoku = function(board) {
    let rowIndex = 0;
    let colIndex = 0;
    
    //check if each row is valid
    for(let rowIndex=0; rowIndex<9; rowIndex++ ){
        if(!isValid(board[rowIndex])){
            return false;
        }
    }
   
    //check if each col is valid
    let col = [];
    for(let colIndex=0; colIndex<9; colIndex++ ){
        col = board.map(x=> x[colIndex]);
        if(!isValid(col)){
            return false;
        }
    }
    
   
    while(rowIndex<9){
        let newArr = [];
        for(var i = rowIndex ; i < 3+rowIndex ; i++){
            newArr.push(board[i].slice(colIndex,colIndex+3));
        }
   
        let temp = newArr[0].concat(newArr[1],newArr[2]);
        if(!isValid(temp)){
            return false;
        }
        colIndex += 3;
        if(colIndex == 9){
            rowIndex +=3;
            colIndex = 0;
        }
    }
    return true;       
};
function isValid(temp){
    let validset = ['1','2','3','4','5','6','7','8','9','.'];
    let newtemp = [];
    for( let i =0 ; i< temp.length ; i++){
         if(!validset.includes(temp[i])){
            return false;
         }
        if(temp[i] != '.'){
            newtemp.push(temp[i]);
         }    
    }
    let s = new Set(newtemp);   
    if(s.size === newtemp.length){
        return true;
    }else{
        return false;
    }
}
console.log(isValidSudoku([
    ["8","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ]));