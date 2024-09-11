let display = document.getElementById('display');
let currentValue = '';
let currentOperation = null;
let previousValue = '';

function appendNumber(number) {
    currentValue += number;
    display.value = currentValue;
}

function setOperation(operation) {
    if (currentValue === '') return;
    if (currentOperation !== null) calculate();
    currentOperation = operation;
    previousValue = currentValue;
    currentValue = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);
    if (isNaN(prev) || isNaN(current)) return;
    switch (currentOperation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentValue = result;
    currentOperation = null;
    display.value = currentValue;
}

function clearDisplay() {
    currentValue = '';
    previousValue = '';
    currentOperation = null;
    display.value = '';
}
