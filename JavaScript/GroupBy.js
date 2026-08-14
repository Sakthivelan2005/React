const students = [
    {name: "Arun", deparment: "CSE"},
    {name: "Bala", deparment: "ECE"},
    {name: "Kumar", deparment: "CSE"},
    {name: "Ravi", deparment: "ECE"},
    
]

//console.log(students.filter((val) => val.deparment === "CSE"));

//const GroupedStudents = Object.groupBy(students, (std) => std.deparment);
// console.log(GroupedStudents);


const orders = [
    {customer: "Arun", product: "Laptop", price: 50000, quantity: 1},
    {customer: "Bala", product: "Mouse", price: 1000, quantity: 2},
    {customer: "Arun", product: "Keyboard", price: 2000, quantity: 1},
    {customer: "Bala", product: "Monitor", price: 15000, quantity: 1},
    {customer: "Kumar", product: "Laptop", price: 50000, quantity: 1},
    {customer: "Arun", product: "Mouse", price: 1000, quantity: 3},
]


const data = Object.groupBy(orders, (orders) => orders.customer);

const sum = orders.reduce((acc,val) => {console.log(acc); console.log(val)})
