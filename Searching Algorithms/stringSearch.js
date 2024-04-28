function stringSearch(str,pattern){
    let count = 0;
    for(let i=0; i<str.length-1; i++){
        for(let j=0; j<pattern.length; j++){
            if(pattern[j] !== str[i+j]){
                break;
            }
            if(j === pattern.length-1){
                count++;
            }
        }
    }
    return count;
}

console.log(stringSearch("what is at end", "at"));
console.log(stringSearch("He hannah said haha","ha"));