//Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
//in a string to their corresponding HTML entities

function convertHTML(str) {
    var tempStr = str.split("");
    
  
    for(var i=0;i<=tempStr.length;i++){
      switch(tempStr[i]){
        case "&":
          tempStr[i] = "&amp;";
          break;
        case "<":
          tempStr[i] = "&lt;";
          break;
        case ">":
          tempStr[i] = "&gt;";
          break;
        case '"':
          tempStr[i] = "&quot;";
          break;
        case "'":
          tempStr[i] = "&apos;";
          break;
      }
  
    }
      str = tempStr.join("");
    
          
       
    return str;
  }
  
  console.log(convertHTML("Hamburgers < Pizza < Tacos"));