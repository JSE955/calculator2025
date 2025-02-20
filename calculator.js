let operation = [];
let displayValue = 'reset';

const display = document.querySelector('.display');

// Allow digit buttons to update display
const digitButtons = document.querySelectorAll('.digit');
digitButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (operation.length === 3) {
            displayValue = 'reset';
            operation = [];
        }
        if (displayValue === 'reset') clearDisplay();
        display.textContent += e.target.textContent;
        displayValue = Number(display.textContent);
    });
});

const operators = document.querySelectorAll('.operator');
operators.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (operation.length === 3) operation = [];
        if (operation.length === 2 && displayValue !== 'reset') {
            operation.push(displayValue);
            displayValue = operate(operation[1], operation[0], operation[2]);
            display.textContent = displayValue;
            operation = [];
            operation.push(displayValue);
            operation.push(e.target.textContent);
            displayValue = 'reset';
        }
        if (operation.length === 0) {
            operation.push(displayValue);
            operation.push(e.target.textContent);
            displayValue = 'reset';
        }
    });
});

const equalButton = document.querySelector('.equal');
equalButton.addEventListener('click', (e) => {
    if (operation.length === 2 && displayValue !== 'reset') {
        operation.push(displayValue);
        console.log(operation);
        displayValue = operate(operation[1], operation[0], operation[2]);
        console.log(displayValue);
        display.textContent = displayValue;
    }
});

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case '*':
            return multiply(a, b);
            break;
        case '%':
            return divide(a, b);
            break;
        default:
            return -1;
    }
}

function clearDisplay() {
    display.textContent = '';
}
