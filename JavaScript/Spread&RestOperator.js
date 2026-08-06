const [item, ...restOfItem] = [20,30,40];
console.log(item)
console.log(restOfItem)

const {city, ...restOfProfile} = {city: "Chennai", name:"Sakthi",state:"TN"}
console.log(city);
console.log(restOfProfile);