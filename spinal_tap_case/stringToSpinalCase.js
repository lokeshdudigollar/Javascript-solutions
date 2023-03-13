//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
    //console.log(str.split(/((?<=[a-z])[A-Z]|[A-Z](?=[a-z]))/))
    str= str.replace(/(?!^)([A-Z])/g, ' $1').replace(/[_\s]+(?=[a-zA-Z])/g, '-').toLowerCase();
    
    return str;
  }
  
  console.log(spinalCase("thisIsSpinalTap"));