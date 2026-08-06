//Shallow Copy
const original = {name: "Sakthi", adress: {city:"Chennai"}};
const copy = JSON.parse(JSON.stringify({...original}));

copy.name = "Jeeva";
copy.adress.city = "Salem"; //Nested copy only it will shallow

console.log(copy);

