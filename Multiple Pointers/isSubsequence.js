function isSubsequence(str1,str2) {
    let pointer1 = 0;
    let pointer2 = 0;
    while(pointer1 < str1.length && pointer2 < str2.length){
      if (str1[pointer1] === str2[pointer2]) {
        pointer1++;
      }
      pointer2++;
    }
    return pointer1 === str1.length;
  }
  
  console.log(isSubsequence('hello', 'hello world')); // true
  console.log(isSubsequence('sing', 'sting')); // true
  console.log(isSubsequence('abc', 'abracadabra')); // true
  console.log(isSubsequence('abc', 'acb')); // false (order matters)

// //Recursive approach
//   function isSubsequence(str1, str2) {
//     if(str1.length === 0) return true
//     if(str2.length === 0) return false
//     if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
//     return isSubsequence(str1, str2.slice(1))
//   }