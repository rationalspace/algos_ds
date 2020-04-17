function makeAnagram(a, b) {
    let i = 0;
    let mapa = {};
    let mapb = {};
;
  
    while(i<a.length){
        if(mapa[a[i]]){
            mapa[a[i]]++;
        }else{
            mapa[a[i]] = 1;
        }
        i++;
    }

    i = 0;
    while(i<b.length){
        if(mapb[b[i]]){
            mapb[b[i]]++;
        }else{
            mapb[b[i]] = 1;
        }
        i++;
    }

    let delcnt = 0;
    for (let key in mapa) {
        if(!mapb.hasOwnProperty(key)){
            delcnt += mapa[key];
        }else{
            delcnt += Math.abs(mapa[key]-mapb[key]);
        }
    }
   
    for (let key in mapb) {
        if(!mapa.hasOwnProperty(key)){
            delcnt += mapb[key];
        }
    } 
    return delcnt;   
}
console.log(makeAnagram('cde','abc'));