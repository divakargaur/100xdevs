// Synchronous -> Only one thing happening at a time
// Asynchronous -> Multiple things are context switching with wah other


// asynchronous function
function Async() {
    console.log("Hello Async");
}
setTimeout(Async, 1000) //(callback, time)


// common async functions -> setTimeout, fs.readFile & Fetch

const fs = require('fs')
fs.readFile('a.txt', 'utf-8', function(err, data) {
    console.log(data)
})


console.log("Hello World")


let ans = 0;
for (let i = 0; i < 1000000000; i++) {
    ans += i    
} 
console.log("Hello 2") // first executes the code then only reaches the pending async functions/callbacks


// call stack, web api & callback stack