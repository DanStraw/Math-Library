var test = require('./index');

test.assert_true(multiply(6,4) === 30, "happy")

test.assert_false()

function multiply(a,b) {
    return a * b;
}

function string(a) {
    return "May the force be with you";
}
