//While we load heavy JS files, That file will lead to crash

const promise = new Promise((resolve, reject) => {
    resolve;
})

promise.then(res => console.log(res)).catch(error => console.log(error));



//Use await when the function returns the promise
//Within the Async function only we use Await at the same time it should return Promise

//non- blocking

//Use Async Await for API response
async function getData(){
    return new Promise((resolve, reject) => {
        setTimeout(
            
        )
    })
}

async function DisplayDate(){
    try{
        console.log("Loading...");
        const data = await getData();
        console.log(data);
    }
    catch(err){
        console.log("error:")
        console.log(err)
    }
}