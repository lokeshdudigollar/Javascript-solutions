//Write a function that takes two or more arrays and returns a new array of unique values 
//in the order of the original provided arrays.

//In other words, all values present from all arrays should be included in their original order, 
//but with no duplicates in the final array

function uniteUnique(arr) {
    let newArr = [];
   
    for(let i=0;i<arguments.length;i++){
      for(let k=0;k<arguments[i].length;k++){
        if(!newArr.includes(arguments[i][k])){
          newArr.push(arguments[i][k]);
  
  
        }
      }
    }
    
    return newArr;
  }
  
  console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));