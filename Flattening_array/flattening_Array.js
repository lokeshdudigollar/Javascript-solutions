function steamrollArray(arr) {
    let temp = [];
    for(let i = 0; i< arr.length; i++){
      if(Array.isArray(arr[i])){
        
          temp.push(...steamrollArray(arr[i]));
  
      }else{
        temp.push(arr[i]);
      }
        
    }
    return temp;
  }
  
console.log(steamrollArray([1, [2], [3, [[4]]]]));