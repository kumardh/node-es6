//npm install promise

const Promise = require('promise');

function slowTask() {
    return new Promise(
        (resolve,reject) => {
            // Simulating a time taking task which return the result after 5 seconds.
            setTimeout(()=>{
                // Perform task there. And once you get the 
                // result, call resolve with the result as below.
                resolve("slowTask completed.");
            }, 5000);
        },
    )
}

function errorTask() {
    return new Promise(
        (resolve,reject) => {
            // Simulating a time taking task which return the result after 2 seconds.
            setTimeout(()=>{
                // Perform task there. But in this case we are 
                // getting exception, call reject with the error message.
                reject("errorTask completed.");
            }, 2000);
        },
    )
}

// slowTask().then(data => console.log(data));
// errorTask().then().catch(err => console.log(err));
// console.log("Completed Promise");

async function slowTaskAsync() {
    var promise = new Promise(
        (resolve,reject) => {
            // Simulating a time taking task which return the result after 5 seconds.
            setTimeout(()=>{
                // Perform task there. And once you get the 
                // result, call resolve with the result as below.
                resolve("slowTaskAsync completed.");
            }, 5000);
        },
    );

    // wait until the promise returns us a value
    console.log("awiting on Promise.")
    let result = await promise;
    return "Promise Result" + result;
}

async function errorTaskAsync() {
    return new Promise(
        (resolve,reject) => {
            // Simulating a time taking task which return the result after 2 seconds.
            setTimeout(()=>{
                // Perform task there. But in this case we are 
                // getting exception, call reject with the error message.
                reject("errorTaskAsync completed.");
            }, 2000);
        },
    )
}


//slowTaskAsync().then(data => console.log(data));
//errorTaskAsync().then().catch(err => console.log(err));
//console.log("Completed slowTaskAsync");

async function taskWithMultiplePromiseInSequenceAsync() {
    var promise1 = new Promise((resolve,reject) => { setTimeout(()=>{ resolve("promise1 completed."); }, 5000); });
    var promise2 = new Promise((resolve,reject) => { setTimeout(()=>{ resolve("promise2 completed."); }, 5000); });
    // wait until the promise1 returns us a value
    console.log("awiting on Promise1.")
    let result1 = await promise1;
    // wait until the promise1 returns us a value
    console.log("awiting on Promise2.")
    let result2 = await promise2;
    return result2 + result2;
}

//taskWithMultiplePromiseInSequenceAsync().then(data => console.log(data));

async function taskWithMultiplePromiseInParallelAsync() {
    let promise1 = new Promise((resolve,reject) => { setTimeout(()=>{ resolve("promise1 completed."); }, 5000); });
    let promise2 = new Promise((resolve,reject) => { setTimeout(()=>{ resolve("promise2 completed."); }, 5000); });
    
    let result = await Promise.all([promise1,promise2]);
    console.log(result);
    return result;
}

//taskWithMultiplePromiseInParallelAsync().then(data => console.log(data));

async function taskWithMultiplePromiseInParallelWithOneRejectedAsync() {
    let promise1 = new Promise((resolve,reject) => { setTimeout(()=>{ resolve("promise1 completed."); }, 10000); });
    let promise2 = new Promise((resolve,reject) => { setTimeout(()=>{ resolve("promise2 completed."); }, 5000); });
    console.log("before");
    var result = await Promise.all([promise1,promise2]);
    console.log("after");
    return result;
}

taskWithMultiplePromiseInParallelWithOneRejectedAsync().then(data => console.log(data)).catch(data => console.log(data));

// Thing to Remember -

// 1. We can’t use the await keyword inside of regular functions.
// 2. Async Await makes execution sequential
// 3. You can't use await in the Main thread.
// 4. The Promise.all() method returns a single Promise that resolves 
//    when all of the promises passed as an iterable have resolved or 
//    when the iterable contains no promises. It rejects with the reason
//    of the first promise that rejects. In the above example output is -

//    before
//    after
//    [ 'promise1 failed.', 'promise2 falied.' ]

//    But if you reject one of the Promise then it doesn't show 'after' and 
//    the Main thread will still be waiting for other Promise to be completed.