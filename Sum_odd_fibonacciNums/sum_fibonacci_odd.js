//Given a positive integer num, return the sum of 
//all odd Fibonacci numbers that are less than or equal to num

function sumFibs(num) {
    var n1 = 0;
    var n2 = 1;
    
    var count = 0;
    var sum = 0;
    while (count < num){
      if(n2 % 2 == 1 && n2<=num){
        //console.log(n2);
        sum = sum+n2
      }
      
      var k= n1+n2;
      n1 = n2;
      n2 = k;
      count= count+1;
      
      
      
  
    }
    return sum;
  }
  
  console.log(sumFibs(1000));