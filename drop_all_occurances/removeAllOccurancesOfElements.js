function destroyer(arr) {
    let s = arr.slice();
    function removeItem(array, item) {
      return array.filter(i => i !== item);
    }
    //console.log(arguments.length-1);
    for (let i=1; i<= arguments.length-1;i++){
      if(s.includes(arguments[i])){
        //console.log("yes")
        s = removeItem(s, arguments[i])
        }
    }
    
    
    
    
    
    //console.log(s);
    
    return s;
  }
  
  console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));