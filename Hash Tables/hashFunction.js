//a simple hash fn that takes a key and an arrayLen
//which is the upper bound (exclusive) of the hash
//we want to be generated
function hash(key, arrayLen) {
    let total = 0;
    let WEIRD_PRIME = 31;
    //Math.min used for larger keys, if key is larger than
    //100 characters long, we go up only to the first 100
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      //Math.abs use to convert negative value produced
      //by capitalised characters while their ASCII being subtracted by 96
      total = Math.abs(total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
  }

  console.log(hash("Heello", 10));