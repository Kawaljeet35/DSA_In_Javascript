function areThereDuplicates(...args) {
    let fcounter = {};
    
    for(let element of args){
      fcounter[element] ? fcounter[element] += 1 : fcounter[element] = 1;
    }
  
    for(let key in fcounter){
      if(fcounter[key] > 1){
        return true;
      }
    }
    return false;
  }
  
  console.log(areThereDuplicates(1,2,3));
  console.log(areThereDuplicates(1,2,2));

  // // One Liner
  // function areThereDuplicates() {
  //   return new Set(arguments).size !== arguments.length;
  // }