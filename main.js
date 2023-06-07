let operations = []
let calcResult = false;

const inputInterface = document.querySelector('#input');

function clearInnerHTML() {
    inputInterface.innerHTML = "";
    operations = [];
}

const clearButton = document.querySelector('#Clear');
clearButton.addEventListener('click', clearInnerHTML)

const intButtons = document.querySelectorAll('.calculator .row button');

intButtons.forEach(function(button) {

    button.addEventListener('click', function() {

        let inputDOM = document.querySelector("#input");
        console.log(calcResult)

        if (calcResult) {
            inputDOM.innerHTML = "";   
            calcResult = false;
        }
        let inputValue = document.querySelector('#input').innerHTML;
        inputValue = parseInt(inputValue + button.innerHTML, 10);
        if (inputDOM.innerHTML === "Invalid Operation") {
            inputDOM.innerHTML = "";
        }

        inputDOM.innerHTML = inputValue;
    });

});

const equalButton = document.querySelector("#Equals");
const plusButton = document.querySelector("#Plus");
const minusButton = document.querySelector("#Minus");
const timesButton = document.querySelector("#Times");
const divisionButton = document.querySelector("#Division");

equalButton.addEventListener('click', function(){

    if (!parseFloat(document.querySelector("#input").innerHTML)) {
        clearInnerHTML();
        inputInterface.textContent = "Invalid Operation";
        return;
    }

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
    operations = [];
    calcResult = true;
});

plusButton.addEventListener('click', function(){

    operations.push(parseFloat(document.querySelector('#input').innerHTML));
    operations.push('+');
    inputInterface.textContent = "+";
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