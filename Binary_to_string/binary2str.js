//Return an English translated sentence of the passed binary string.

//The binary string will be space separated

function binaryAgent(str) {
    for(let i =0; i<str.length;i++){
      
    }
    let strArr = str.split(" ");
    let decimal = strArr.map(elem => parseInt(elem,2));
    let dectostr = decimal.map(elem => String.fromCharCode(elem));
    let finalstr = dectostr.join("");
    
    
    return finalstr;
  }
  
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");