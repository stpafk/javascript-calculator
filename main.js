let operations = []

const inputInterface = document.querySelector('#input');

const clearButton = document.querySelector('#Clear');
clearButton.addEventListener('click', function (){
    inputInterface.textContent = 0;
    operations = []
});

const intButtons = document.querySelectorAll('.calculator .row button');

intButtons.forEach(function(button) {

    button.addEventListener('click', function() {
        let inputValue = document.querySelector('#input').innerHTML;
        inputValue = parseInt(inputValue + button.innerHTML, 10);
        document.querySelector('#input').innerHTML = inputValue;
    });

});

const equalButton = document.querySelector("#Equals");
const plusButton = document.querySelector("#Plus");
const minusButton = document.querySelector("#Minus");
const timesButton = document.querySelector("#Times");
const divisionButton = document.querySelector("#Division");

equalButton.addEventListener('click', function(){

    operations.push(parseFloat(document.querySelector('#input').innerHTML));
    let result = operations[0];
    for (let i=1;i<operations.length;i+=2) {
        let operator = operations[i];
        let secondOperand = operations[i+1];
        if (operator === '+') {
            result += secondOperand;
        }
        else if (operator === '-') {
            result -= secondOperand;
        }
        else if (operator === '*') {
            result *= secondOperand;
        }
        else if (operator === '/') {
            result /= secondOperand;
        }
    }
    inputInterface.textContent = result;
    operations = []
});

plusButton.addEventListener('click', function(){

    operations.push(parseFloat(document.querySelector('#input').innerHTML));
    operations.push('+');
    inputInterface.textContent = "";
});

minusButton.addEventListener('click', function(){

    operations.push(parseFloat(document.querySelector('#input').innerHTML));
    operations.push('-');
    inputInterface.textContent = "";
});

timesButton.addEventListener('click', function(){

    operations.push(parseFloat(document.querySelector('#input').innerHTML));
    operations.push('*');
    inputInterface.textContent = "";
});

divisionButton.addEventListener('click', function(){
    operations.push(parseFloat(document.querySelector('#input').innerHTML));
    operations.push('/');
    inputInterface.textContent = "";
});