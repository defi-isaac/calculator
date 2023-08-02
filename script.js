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

removeButton.addEventListener('click', () => {
    if (numsDisplay.textContent == 'Error' || numsDisplay.textContent == 'NaN') {
        clear();
    }
    let content = numsDisplay.textContent;
    numsDisplay.textContent = content.slice(0,-1);
})

nums.forEach((numButton) => {

    numButton.addEventListener('click', () => {
        if (numsDisplay.textContent == 'Error' || numsDisplay.textContent == 'NaN') {
            clear();
        }
        numsDisplay.textContent += numButton.id;
    })

})

operatorButton.forEach((operatorButton) => {

    operatorButton.addEventListener('click', () => {
        numsDisplay.textContent += operatorButton.id;
    })

})

function calculateAnswers (valuesArr, valuesStr, operator) {
    valuesStr = valuesArr.join('');
    valuesArr = valuesStr.split(`${operator}`);
    clear();
    numsDisplay.textContent += operate(valuesArr[0], `${operator}`, valuesArr[1]);
}

equals.addEventListener('click', () => {
    // Split to later determine the operator
    let valuesArr = numsDisplay.textContent.split('');
    let valuesStr;
    if (valuesArr.includes('+')) {
        calculateAnswers(valuesArr, valuesStr, '+');
    } else if (valuesArr.includes('-')) {
        calculateAnswers(valuesArr, valuesStr, '-');
    } else if (valuesArr.includes('×')) {
        calculateAnswers(valuesArr, valuesStr, '×');
    } else if (valuesArr.includes('÷')) {
        calculateAnswers(valuesArr, valuesStr, '÷');
    }

})







