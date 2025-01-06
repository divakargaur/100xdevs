let arr = [3, 5, 2, 6, 7, 8, 9];
let num = arr[0];

for (let i = 0; i < arr.length; i++) {       
    if (arr[i] > num) {
//      num == arr[i]; -> equality operator
        num = arr[i];
    }
}

console.log(num);
