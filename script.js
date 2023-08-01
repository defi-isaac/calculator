const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;

let num1;
let num2;
let operator;

const operate = (num1, operator, num2) => {
    if (operator == '+') return add(num1, num2)
    else if (operator == '-') return subtract(num1, num2)
    else if (operator == '*') return multiply(num1, num2)
    else if (operator == '/') return divide(num1, num2)
    else return 'Something went wrong';
}