const nums = document.querySelectorAll('.num');
const numsDisplay = document.querySelector('.numsDisplay');
const clearButton = document.querySelector('#clear');
const removeButton = document.querySelector('#delete');
const operatorButton = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');

const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;


const operate = (a, operator, b) => {
    let num1 = Number(a);
    let num2 = Number(b);
    if (operator == '+') return add(num1, num2)
    else if (operator == '-') return subtract(num1, num2)
    else if (operator == '×') return multiply(num1, num2)
    else if (operator == '÷') return divide(num1, num2)
    else return 'Error';
}

function clear () {
    numsDisplay.textContent = '';
}

clearButton.addEventListener('click', () => {
    clear();
})

nums.forEach((numButton) => {

    numButton.addEventListener('click', () => {
        numsDisplay.textContent += numButton.id;
    })

})

operatorButton.forEach((operatorButton) => {

    operatorButton.addEventListener('click', () => {
        numsDisplay.textContent += operatorButton.id;
    })

})

removeButton.addEventListener('click', () => {
    let values = numsDisplay.textContent.split('');
    
    numsDisplay.textContent = ;
    

})

equals.addEventListener('click', () => {
    let values = numsDisplay.textContent.split('');
    clear();
    numsDisplay.textContent += operate(values[0], values[1], values[2]);
})








