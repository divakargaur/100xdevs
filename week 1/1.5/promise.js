// everything below (promise or not) is Asynchronous
// in output we will get Promise { <pending> } first
// everything else will log after that

const fs = require('fs');

function readFileCallBack(cb) {
    fs.readFile('a.txt', 'utf-8', function (err, data) {
        cb(data)
    })
}

function onDoneCallBack(data) {
    console.log(data)
}

readFileCallBack(onDoneCallBack)


// promises are syntactical sugar that makes the code slightly more readable

// the code still uses callbacks under the hood but we do not see them in the code cause it's supposedly ugly

function readFilePromise() {
    return new Promise(function (resolve) {
        fs.readFile('a.txt', 'utf-8', function (err, data) {
            resolve(data)
        })
    })
}

function onDonePromise(data) {
    console.log(data)
}

console.log(readFilePromise())
readFilePromise().then(onDonePromise)

// returns the Promise { <pending> } immediately
// resolves and returns the data only when we use .then()


// initializing a promise
// first argument is a function with resolve as the first argument
const p = new Promise(function (resolve) {
    resolve('')
})
console.log(p)

// pending, resolved, rejected, undefined ...