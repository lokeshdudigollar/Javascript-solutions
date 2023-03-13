//According to Kepler's Third Law, the orbital period  T  of two point masses orbiting each other
// in a circular or elliptic orbit is:

//T=2π(sqrt(a^3/μ))
 
//a  is the orbit's semi-major axis
//μ=GM  is the standard gravitational parameter
//G  is the gravitational constant,
//M  is the mass of the more massive body.
//Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
  
    const a = 2 * Math.PI;
    
    
    
    let c = 0;
  
    for(let i=0 ; i<arr.length;i++){
      const c = Math.pow((earthRadius + arr[i].avgAlt),3);
      const b = Math.sqrt(c/GM);
      const orbPeriod = Math.round(a*b);
      delete arr[i].avgAlt;
      arr[i].orbitalPeriod = orbPeriod;
    }
   
    //console.log(arr);
    return arr;
  }
  
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));