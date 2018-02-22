// console.log(6 === 4+ 2);

// function add(x, y) {
//     return x + y;
// }
// console.log(6 === add(2,4))

function subtract(x, y) {
    return x - y;
}
console.log(5 === subtract(25,20))

// function multiply(x,y) {
//     return x * y;
// }
// console.log(30 === multiply(5,6))1

// function divide(x,y) {
//     return x / y;
// }
// console.log(4 === divide(36,9))

function assert(expected, actual, message) {
 return ((expected === actual) ? true : message)
}
console.log(assert(5, subtract(6,2), "unhappy path"));