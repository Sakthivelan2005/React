function greet(name, callback){
    callback();
    console.log("Hello, ",name);
}

function bye(){
    console.log("Bye");
}

greet("John", bye)



//Task-1 Display Bye John
function greet(name, callback){
    callback(name);
}

function bye(name){
    console.log("Bye, ", name);
}

greet("John", bye);