var countAndSay = function(n){
    var ans = "1";
    for(let i = 2;i<=n;i++){
        ans = findNextAns(ans);
    }
    return ans;
};

function findNextAns(n){
    let res = "";
    let freq = 0;
    let charC;
    for(let i = 0; i < n.length; i++){
        charC = n[i];
        freq++;
        if(n[i+1] != charC || i == n.length-1){
            res += freq + charC;
            freq = 0;
        }  
    }
    return res;
}
console.log(countAndSay(5));