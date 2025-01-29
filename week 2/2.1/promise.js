// the main purpose of learning promises is the async await syntax
// as we mentioned before it is just a syntactical sugar


let p = new Promise(() => {});
// Promise is a class/function
// but p is an object


// callback hell
async () => {
    async () => {
        async () => {

        }
    }
}


// promise chaining
new Promise((res, err) => {})
.then(() => {})
.then(() => {})
.catch(() => {})


// async await
async () => {
    const res = await p();
    console.log(res);
}


//sum(1, 2, fn) -> this how you a pass a function
//sum(1, 2, fn()) => sum(1, 2, RETURN_VALUE) -> will give an error
