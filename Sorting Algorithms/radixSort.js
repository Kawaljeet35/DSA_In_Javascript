function getDigit(num,i){
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num){
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums){
    let maxDigits = 0;
    for(let i=0; i<nums.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

function radixSort(array){
    let maxDigitCount = mostDigits(array);
    for(let k=0; k<maxDigitCount; k++){
        let digitBuckets = Array.from({length :10}, () => []);
        for(let i = 0; i < array.length; i++){
            let digit = getDigit(array[i],k);
            digitBuckets[digit].push(array[i]);
        }
        array = [].concat(...digitBuckets);
    }
    return array;
}

console.log(radixSort([332,123,4,56,76,435,45,11,2345,9]))