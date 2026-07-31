//Note: You can do mistakes in Date()
//In
const date = new Date();

date.toDateString()
date.toTimeString();


const a = new Date("2025-05-16");

//month => 0 to 1,  0 -> January
//date()

date.getMonth(7) //=>RETURN 6
date.getDay() //0 to 6

const date1 = Date.now() // => returns milli-seconds

//Setting date

console.log(date1)


//In Date can use comparison operators Directly

const start = new Date("2025");
const end = new Date("");
const diff = end - start;
const days = diff / (1000 * 60 * 60 * 24) // (seconds, mins, hrs, day)
console.log(days)

const year = new Date().getFullYear() //return New Year
console.log(year);

Math.ceil()