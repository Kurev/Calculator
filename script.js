let display = document.getElementById('display');

function appendToDisplay(value) {
    if (value === '*') {
        display.value += 'x';
    } else if (value === '/') {
        display.value += '÷';
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = '';
}

function deleteLastCharacter() {
    let currentDisplayValue = display.value;
    display.value = currentDisplayValue.slice(0, -1);
}

function calculateResult() {
    let currentDisplayValue = display.value;
    currentDisplayValue = currentDisplayValue.replace(/x/g, '*').replace(/÷/g, '/');
    
    try {
        let result = eval(currentDisplayValue);
        if (result === Infinity || isNaN(result)) {
            display.value = 'Undefined';
        } else {
            display.value = result;
        }
    } catch (e) {
        display.value = 'Error';
    }
}
