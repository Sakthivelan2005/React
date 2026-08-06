//Object destructing
const user = {
    name: "Sakthi",
    age: 20,
    city: "Chennai"
};
console.log("Object Destructing: \n")

//Normal destructing
const {name, age} = user;
console.log(name);

//Changing variable name
const {city: address} = user;
console.log(address);

//Default object creating if the role Key is there in user Object returns default
const {role = "Guest"} = user;
console.log(role);

console.log("\nArray Destructing: \n");
//Array Destructing
const colors = ["red","green","blue"];

//Normal Destructing
const [a,b] = colors;
console.log(a)

//rest
const [,,c] = colors;
console.log(c);

//default
const [a,b,c,d="Yellow"] = colors
console.log(d)


//Nested Destructuring
