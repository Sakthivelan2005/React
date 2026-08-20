const arr = [1,2,3,4,5]

const MapArr = arr.map((a) => a+3);
console.log(MapArr)

const FilterArr = arr.filter((a) => a !== 3);
console.log(FilterArr);

const ReduceArr = arr.reduce((acum, val) => {
    console.log("accumalator: ",acum, " Value: ",val);
    acum = acum + val; 
    return acum 
});
console.log(ReduceArr);

// let arr = []

// arr.push({name: "sakthi", age: 21});
// arr.push({name: "Vivky", age: 23});
// arr.push({name: "Fahed", age: 31});
// arr.push({name: "Salpi", age: 25});


// console.log(arr);