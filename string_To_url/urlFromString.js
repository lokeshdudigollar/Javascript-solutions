
function urlSlug(title) {
    //first method
    let localtitle= title.slice();
    return localtitle
          .toLowerCase().trim()
          .split(/\s+/) //removes extra spaces too
          .join("-");

    //second method
    //return localtitle
    //.split(" ")
    //.filter(substr => substr !== "")
    //.join("-")
    //.toLowerCase();
}
  // Only change code above this line
console.log(urlSlug(" Winter Is  Coming"));