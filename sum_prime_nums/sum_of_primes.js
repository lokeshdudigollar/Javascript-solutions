//the sum of all prime numbers that are less than or equal to num.

function sumPrimes(num) {
    if(num == 0 || num ==1){
      return 0;
    }else if(num == 2 ){
      return num;
    }else{
  
    
      var sum = 2; //bcz 2  anyways prime number
      for(var i=3; i<=num; i++){
        let prime= true;
        
        for(var j =2; j<i;j++){
          if(i % j == 0){
            prime= false;
            
            }
        }
        if(prime== true){
          sum = sum + i;
          
         
          
        }
        
        
      }
    }
    return sum;
  }
  
  console.log(sumPrimes(10)); 