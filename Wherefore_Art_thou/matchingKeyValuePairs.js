function whatIsInAName(collection, source) {
    const arr = [];
    // Only change code below this line
    const sourceKeys = Object.keys(source);
    //console.log(source[sourceKeys[0]])
    
    return collection.filter(obj =>{
    for(let i=0; i<sourceKeys.length;i++){
      if(!obj.hasOwnProperty(sourceKeys[i]) ||
      obj[sourceKeys[i]] !== source[sourceKeys[i]]
      ){
        return false;
      }
    }
    return true;
    });
  
  
    // Only change code above this line
    return arr;
  }
  
  console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));