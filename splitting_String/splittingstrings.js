const str = "Hello World";
console.log(str.split(" ")); //["Hello", "World"]
const otherString = "How9are7you2today";
console.log(otherString.split(/\d/)); //["How", "are", "you", "today"]

function splitify(str) {
    return str.split(/\W/);
   
}
  
console.log(splitify("This.is.a-sentence"));

///\W/ Matches any non-word character. 
//This includes spaces and punctuation, but not underscores. It’s equivalent to /[^A-Za-z0-9_]/