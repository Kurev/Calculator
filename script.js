let display = document.getElementById('display')

function appendToDisplay(value) {
    display.value += value;
    
}

function clearDisplay() {
    display.value = '';
}

function deleteLastCharacter() {
    let currentDisplayValue = display.value;
    display.value = currentDisplayValue.slice(0, -1);
}

function calculateResult() {
    display.value = eval(display.value)
    if (display.value == 'Infinity' || NaN){
        display.value = 'Undefined'
    }   
}

