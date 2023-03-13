//Perform a search and replace on the sentence using the arguments provided and return the new sentence.

//First argument is the sentence to perform the search and replace on.

//Second argument is the word that you will be replacing (before).
//Note: Preserve the case of the first character in the original word when you are replacing it. 
//For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

function myReplace(str, before, after) {
    if(before[0] == before[0].toUpperCase()){
      after = after.split("")
      after.splice(0,1,after[0].toUpperCase());
      after= after.join("");
    }else{
      after = after.split("")
      after.splice(0,1,after[0].toLowerCase());
      after= after.join("");
  
    }
    
    
    let findStr = str.match(before);
    //console.log(before.length,findStr.index);
    let arr = str.split("");
    //console.log(arr);
    arr.splice(findStr.index,before.length,after);
    str = arr.join("");
    //Line 22-27 can be done in one single line> str = str.replace(before, after);
    return str;
  }

  /*
  function myReplace(str, before, after) {
  // Check if first character of argument "before" is a capital or lowercase letter and change the first character of argument "after" to match the case
  if (/^[A-Z]/.test(before)) {
    after = after[0].toUpperCase() + after.substring(1)
  } else {
    after = after[0].toLowerCase() + after.substring(1)
  }

  // return string with argument "before" replaced by argument "after" (with correct case)
  return str.replace(before, after);
}*/
  
  console.log(myReplace("I think we should look up there", "up", "Down"));