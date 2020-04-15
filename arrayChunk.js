// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
function chunk(arr,size){
    let newarr = [];
    let i = 0;
    while(i<arr.length){    
        let temparr = [];
        let j = 1;
        while(j <= size && i < arr.length){
            temparr.push(arr[i]);
            i++; j++;
        }
        newarr.push(temparr);
    }
    console.log(newarr);
}
function chunk2(arr,size){
    let newarr = [];
    let i = 0;
    while(i<arr.length){    
        newarr.push(arr.slice(i,i+size));
        i += size;
    }
    console.log(newarr);
}
chunk2([1, 2, 3, 4,5], 2);