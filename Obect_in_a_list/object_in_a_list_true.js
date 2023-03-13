//You are given an array collection of objects. 
//The predicate pre will be an object property and you need to return true if its value is truthy. 
//Otherwise, return false
function truthCheck(collection, pre) {
    let temp = [];
    for( let i=0; i<collection.length;i++){
      temp.push(collection[i][pre]);
    }
  
    return temp.every(decide);
    
  }
  
  function decide(item){
    return Boolean(item) == true
  }
  
  console.log(truthCheck([{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}, {name: "MissingNo", number: NaN, caught: 0}], "number"));