//Method to create Hash table objects
class HashTable{
    constructor(size=5){
        this.keyMap = new Array(size);
    }
    //Simple implementation of a hash function
    hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
          let char = key[i];
          let value = char.charCodeAt(0) - 96
          total = Math.abs(total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    //Method to set or insert a key value pair in the array
    set(key,value){
        let index = this.hash(key);
        if(!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    //Method to get the value corresponding to the given key
    get(key){
        let index = this.hash(key);
        if(this.keyMap[index]){
            for(let i = 0; i < this.keyMap[index].length; i++){
                if(this.keyMap[index][i][0] === key){
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined;
    }

    //Method to get an array of keys in the hash table
    keys(){
        let keysArray = [];
        for(let i = 0; i < this.keyMap.length; i++){
          if(this.keyMap[i]){
            for(let j = 0; j < this.keyMap[i].length; j++){
              if(!keysArray.includes(this.keyMap[i][j][0])){
                keysArray.push(this.keyMap[i][j][0])
              }
            }
          }
        }
        return keysArray;
    }

    //Method to get an array of values in the hash table
    values(){
        let valuesArray = [];
    for(let i = 0; i < this.keyMap.length; i++){
      if(this.keyMap[i]){
        for(let j = 0; j < this.keyMap[i].length; j++){
          if(!valuesArray.includes(this.keyMap[i][j][1])){
            valuesArray.push(this.keyMap[i][j][1])
          }
        }
      }
    }
    return valuesArray;
    }

}

var table = new HashTable();
table.set("hello", "kawal");
table.set("hi", "geet");
table.set("ho", "jee");
table.set("pranam", "sir");
table.set("kee", "haal");
table.set("ho", "jee");
table.set("pranam", "sir");
table.set("kee", "haal");
console.log(table.get("ho"));
console.log(table.values());

