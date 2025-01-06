let arr = [6, 7, 9, 4, 5, 6];
let res = [];

for (let i = 0; i < arr.length; i++) {
//  if (arr[i] % 2) -> this will print odd numbers because if it is divisible, the answer is 0 and by default it will be treated false
    if (arr[i] % 2 == 0) {
        res.push(arr[i]);
    //  res += i; -> this will not create an array rather a string
    }    
}

console.log(arr);
console.log(res);
