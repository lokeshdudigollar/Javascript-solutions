function diffArray(arr1, arr2) {
    return arr1
      .concat(arr2)
      .filter(item => !arr1.includes(item) || !arr2.includes(item));
  }

  function diffArray(arr1, arr2) {
    const newArr = [];
    //you can create a function in place of two loops and call the function twice
    for(let each in arr2){
      if(arr1.includes(arr2[each])){
        
      }
      else{
        newArr.push(arr2[each]);
  
      }
    }
    for(let each in arr1){
      if(arr2.includes(arr1[each])){
        
      }
      else{
        newArr.push(arr1[each]);
  
      }
    }
    //console.log(len)
    return newArr;
  }
  
  
  
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));