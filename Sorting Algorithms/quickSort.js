function pivot(array, start = 0, end = array.length-1){
    
    function swap(array,i,j){
        var temp = array[i];
        array[i] = array[j]
        array[j] = temp;
    }
    
    var pivot = array[start];
    var swapIndex = start;

    for(var i = start+1; i < array.length; i++){
        if(pivot > array[i]){
            swapIndex++;
            swap(array,swapIndex,i);
        }
    }
    swap(array,start,swapIndex);
    return swapIndex;
}

function quickSort(array,left = 0, right = array.length-1){
    if(left<right){
        let pivotIndex = pivot(array,left,right);
        //left
        quickSort(array,left,pivotIndex-1);
        //right
        quickSort(array,pivotIndex+1,right);
    }
    return array;
}

console.log(quickSort([4,8,2,1,5,7,6,3]));