function rot13(str) {
    //const nonalphaStr = str.replace(/[a-z0-9]/gi,'');
    let temp = [];
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x));
   
    for(let i in str){
      
      if(alphabet.includes(str[i])){
        i = Number(i);
        //console.log(alphabet.indexOf(str[i]),str[i]);
        let index = alphabet.indexOf(str[i]);
        if(index <13){
          temp.push(alphabet[index+13]);
        }else{
          i = index+13-26;
          temp.push(alphabet[i]);
        }
        
      }else{
        temp.push(str[i]);
  
      }
    }
    str = temp.join("");
  
    return str;
  }
  
  console.log(rot13("SERR PBQR PNZC"));