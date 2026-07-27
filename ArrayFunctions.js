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