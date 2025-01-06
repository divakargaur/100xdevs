function sum(a, b, funcToCall) {
    let ans = a + b;
    return funcToCall(ans);
}

// if we do not pass any thing to return for a function, it will give undefined

function pretty(data) {
    let out = "The sum of A & B is: " + data;
    return out;
}

function passive(data) {
    let out = "A & B 's sum is : " + data;
    return out; 
}

console.log(sum(1, 2, pretty));
