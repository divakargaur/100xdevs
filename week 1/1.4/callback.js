function square(n) {
    return n * n;
}

function cube(n) {
    return n * n * n;
}

function sumOf(a, b, fn) {
    val1 = fn(a);
    val2 = fn(b);

    return val1 + val2;
}

console.log(sumOf(2, 3, square));
console.log(sumOf(2, 3, cube));