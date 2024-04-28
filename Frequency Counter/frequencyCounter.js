function sameFrequency(n1,n2){
    if(n1.toString().length !== n2.toString().length) return false;
  
    let fcounter1 = {};
    let fcounter2 = {};
  
    for(let digit of n1.toString()){
      digit = parseInt(digit);
      fcounter1[digit] ? fcounter1[digit] += 1 : fcounter1[digit] = 1;
    }
    for(let digit of n2.toString()){
      digit = parseInt(digit);
      fcounter2[digit] ? fcounter2[digit] += 1 : fcounter2[digit] = 1;
    }
    for(let key in fcounter1){
      if(!(key in fcounter2) || (fcounter2[key] !== fcounter1[key])) {
        return false;
      } 
    }
    return true;
  }
  
  console.log(sameFrequency(182,281));
  console.log(sameFrequency(183,281));
  console.log(sameFrequency(3589578, 5879385));