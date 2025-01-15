// again just syntactic sugar
// still uses callbacks/promises under the hood


function oneAsyncFunction() {
    let p = new Promise(function (resolve) {
        setTimeout(function () {
            resolve('hi there');
        }, 1000)
    })
    return p;
}

function main() {
    oneAsyncFunction().then(function (value) {
        console.log(value);
    })
}

main()

// same thing as above but more readable

async function mainTwo() {
    let value = await oneAsyncFunction();
    console.log(value);
}

mainTwo()