// Promises are an Object and eventually completion 
// how to make promise in js that looks like this one --> 
// in the promise remember go through the sequence otherwise it through an error
const promiseOne = new Promise((resolve, reject) => {
// what can we do in promises we can do all async works, DB calls, Network related workd.
// now we use here setTimeout for when we log our output it's depend on us
setTimeout(()=>{
    // it also contain a function inside himself like as promises
    console.log("Async Task")
    resolve()
 }, 2000) // 2000 mean after how much time we log our output and it contain only milisecondes 
}) // now after it when the prommise create we need to consume it.
promiseOne.then(()=>{
    // it also contain a function like both of them 
    // .then has direct connection to resolve key
    console.log("Promise consumed")
}) // now if we loged and oue ouput will come only async task not promise comsumed also because we need to call resolve also like return word
// if we need to complete our promise we use resolve like this that i use above 
// // now output will come like this format 
// Async Tesk
// Promise consumed
// let's see how can we do it without store it into any variable 
new Promise((resolve, reject)=>{
    console.log("Async task 2");
    resolve()
}, 5000).then(()=>{
    console.log("Async task 2 complete")
})
// now we learn how to send data to .then function --> so we can use again resolve and store value in it in any format that you need  
new Promise((resolve, reject)=>{
    resolve({username : "Arman", email: "Armanarsh123456@gmail.com"});
    // now here is issue how to store in into ,then function 
    // we can use any word that u want. in the .then function 
}, 20000).then((user)=>{
    console.log(user)
})

// now we are using reject and catch
new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false // if we have err then what we print let see down
        // use condition 
        if(!error) { // if we don't have any error then print this one
            resolve({Country :"India", State : "Haryana"}) 
            // always remember reject through an err
        }else{
            reject("Error : something went worng")
        }
    }, 1000)
})
.then((info) => {
    console.log(info); // but i wnat to print only Countyr not full so how? now we use return statement
    return info.Country // but but but where this return statement will goes? we don't know. for this we can use multiple times .then like this one see down -->
})
.then((continent) => {
    console.log(continent);
})
.catch((error) => {
    console.log(error)
}).finally(() => console.log("Promise is resolced either rejected")) // .finally used to log fianl output that looks easier for not confuse
// but u all think till now the code is correct but here it willl through an error because we use not use her catch word