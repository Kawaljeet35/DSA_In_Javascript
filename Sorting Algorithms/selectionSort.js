function selectionSort(array){
    for(let i=0; i<array.length-1;i++){
        let min = i;
        for(let j=i+1; j<array.length;j++){
            if(array[j] < array[min]){
                min = j;
            }
        }
        if(array[i] !== array[min]){
            let temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }
    return array;
}

console.log(selectionSort([8,4,5,1,9]));


