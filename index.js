function add(a,b) {
    return a + b;
}
//console.log(add(2,2));

function subtract(a,b) {
    return a - b;
}
//console.log(subtract(5,3));

function multiply(a,b) {
    return a * b;
}
//console.log(multiply(12,12));

function divide(a,b) {
    return a / b;
}
//console.log(divide(144,12));

function increment(n) {
    return n=n+1;
}
//console.log(increment(10));


function decrement(n) {
    return n=n-1;
}
//console.log(decrement(10));

/*function decrement(n) {
    return --n;
}
console.log(decrement(10));*/

function makeInt(n) {
    return parseInt(n,10)
}
//console.log(makeInt(66.666));

function preserveDecimal(n) {
    return parseFloat(n);
}
//console.log(preserveDecimal(66.666));