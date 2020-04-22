/*00 01 02
10 11 12
20 21 22


20 10 00
21 11 01
22 12 02*/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let colnum = matrix[0].length;
    let newmatrix = [];
    for(let i=0; i<colnum ;i++){
        let col = matrix.map(x=>x[i]);
        col.reverse();
        newmatrix.push(col);
    }
    return newmatrix;
};
console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));