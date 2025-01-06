let count = 0;

// in loops we iterate over some logic over and over again

for (let index = 0; index <= 1000; index++) {
    count++;
    console.log(index); 
}
console.log("Total Count -> ", count);

// Variables declared by let are only available inside the block where they're defined.
// Variables declared by var are available throughout the function in which they're declared.