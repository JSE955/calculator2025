let operator = '';
let operand1 = 0;
let operand2 = 0;
let displayValue = 0;

const display = document.querySelector('.display');


// Allow digit buttons to update display
const digitButtons = document.querySelectorAll('.digit');
digitButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        display.textContent += e.target.textContent;
        displayValue = Number(display.textContent);
    });
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
        case '/':
            return divide(a, b);
            break;
        default:
            return -1;
    }
}
