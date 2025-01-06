arr = [1, 2, 3, 4, 5];

// reverse all the elements of an array without creating a new one

let i = 0;
let j = arr.length - 1;
while (j > i) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;  
}

console.log(arr);
