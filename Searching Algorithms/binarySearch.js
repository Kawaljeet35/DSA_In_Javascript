function binarySearch(array,target){
    let left = 0;
    let right = array.length-1;
    while(left<=right){
        let mid = Math.floor((left + right) / 2);
        if(array[mid] === target){
            return mid;
        }
        else if(array[mid] > target){
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return -1;
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9],6));

// Original Solution
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === elem){
        return middle;
    }
    return -1;
}

// Refactored Version
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

binarySearch([2,5,6,9,13,15,28,30], 103)