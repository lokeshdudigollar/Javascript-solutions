//Find the missing letter in the passed letter range and return it.

//If all letters are present in the range, return undefined.

function fearNotLetter(str) {
    let allLetters = 'abcdefghijklmnopqrstuvwxyz';
    let x = allLetters.indexOf(str[0]);
  
    for(let i=x;i<allLetters.length;i++){
      
      if(str.indexOf(allLetters[i]) == -1){
        str = allLetters[i];
        return str;
        
      }
      
    }
    return undefined;
    
    
  }
/*
function fearNotLetter(str) {
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}
 */
  
  console.log(fearNotLetter("stvwx"));