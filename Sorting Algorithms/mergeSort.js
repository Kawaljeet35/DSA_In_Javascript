function merge(array1,array2){
    let result = [];
    let i = 0;
    let j = 0;
    while(i<array1.length && j<array2.length){
        if(array2[j] > array1[i]){
            result.push(array1[i]);
            i++;
        }
        else 
        {
            result.push(array2[j]);
            j++;
        }
    }
    while(i<array1.length){
        result.push(array1[i]);
        i++;
    }
    while(j<array2.length){
        result.push(array2[j]);
        j++;
    }
    return result;
}

function mergeSort(array){
    if(array.length <= 1) return array;
    let mid = Math.floor(array.length/2);
    let left = mergeSort(array.slice(0,mid));
    let right = mergeSort(array.slice(mid));
    return merge(left,right);
}

console.log(mergeSort([5,1,4,3,2,6]));