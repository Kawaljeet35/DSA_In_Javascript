function linearSearch(array,value){
    for(let i = 0; i< array.length; i++){
        if(array[i] === value) return i;
    }
    return -1;
}

console.log(linearSearch([1,2,3,4,5,6,7,8,9,10],5));