//Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) 
//and turn everything into the same case (lower or upper case) in order to check for palindromes.


function palindrome(str) {
    const updatedStr = str.replace(/[^a-z0-9]/gi,'').toLowerCase();
    //console.log(updatedStr);
    var splitString = updatedStr.split("");
    var reverseArray = splitString.reverse();
    var joinedArray = reverseArray.join('');
  
    if(joinedArray === updatedStr){
      return true;
    }else{
      return false;
    }
  
  
    
  }
  
  console.log(palindrome("eye"));