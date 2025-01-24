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