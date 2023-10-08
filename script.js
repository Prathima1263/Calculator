// script.js

function clearDisplay() {
    document.getElementsByName('display')[0].value = '';
}

function deleteLastChar() {
    let currentValue = document.getElementsByName('display')[0].value;
    document.getElementsByName('display')[0].value = currentValue.slice(0, -1);
}

function addToDisplay(value) {
    document.getElementsByName('display')[0].value += value;
}

function calculateResult() {
    try {
        let currentValue = document.getElementsByName('display')[0].value;
        const result = eval(currentValue);
        if (isNaN(result) || !isFinite(result)) {
            document.getElementsByName('display')[0].value = 'Invalid Expression';
        } else {
            document.getElementsByName('display')[0].value = result;
        }
    } catch (error) {
        document.getElementsByName('display')[0].value = 'Error';
    }
}
