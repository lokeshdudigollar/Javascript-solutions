function ascendingOrder(arr) {
    return arr.sort(function(a, b) {
      return a - b;
    });
  }
ascendingOrder([1, 5, 2, 3, 4]); // returns [1, 2, 3, 4, 5]

function reverseAlpha(arr) {
    return arr.sort(function(a, b) {
      return a === b ? 0 : a < b ? 1 : -1; //if you exchange -1 with 1 and vice-versa you get in increasing order
    });
  }
  
console.log(reverseAlpha(['l', 'h', 'z', 'b', 's'])); //returns ['z', 's', 'l', 'h', 'b']