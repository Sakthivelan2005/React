const str = "This is sakthi";
const rs = str.replace(" ","")
//console.log(rs)


const splice1 = [10,40]
const msplice = splice1.splice(1,0,20,30)
console.log(splice1)
console.log(msplice)

const arr = [10,40,50,60]
const splice = arr.toSpliced(2,1,"added")
console.log(arr)
console.log(splice)

let reversed = arr.reverse()

console.log(arr.sort((a,b) => a - b) )
//first it checkes 10 - 40 -> Negative swaped
//second it checks 10 - 50 -> Negative swaped
//third it checks 10 - 60 -> Negative swaped
//Output: 40,50,60,10

//It differs according the web browsers

/*
let array = []
array.length;
array.split() // It splits the string according to your given String which common
array.push()//modify the original array
array.pop() //modify the original array and returns last value
array.unshift() //modify the original array that add value at first.
array.shift()
array.indexOf() //return the Index value of 
array.join() 
array.slice() //It won't affect the original array (start,)
array.splice() //modify the original array (start index, no.of items going to delete)
array.toSpliced()//It won't modify the original array same syntax and functionality of spliced()
array.reverse() //modify the original array
array.sort() //It's used only for Alphabets
array.forEach() //It won't return new array it traverse to each items returned
*/

//Task-1 Reverse the string
const str2 = "madam";
if(str === str2.split("").reverse().join("")){
    console.log("It is palinedrome");
}
else{
    console.log("It is not palinedrome")
}

//Task-2 Reverse the string without Reversed() function
const string = "Madnam".toLowerCase();

let stack = string.split("");

let reverse = ""
while(stack.length > 0){
    reverse += stack.pop()
}

if(string === reverse){
    console.log("It's palindrome")
}
else{
    console.log(string, " is not a Palindrome")
}