console.log('hello World')

const displayPrimary = document.querySelector('#first-ds');
const displaySecondary = document.querySelector('#second-ds');

const numberButtons = document.querySelectorAll('.no-btn')
const operatorButtons = document.querySelectorAll('.operator-btn')
const equalToButton = document.querySelector('.equal-btn')
const clearButton = document.querySelector('.clear-btn')


let numberOne = 0;
let numberTwo = 0;
let result = 0;
let operator;
let operatorClicked = false;

displayPrimary.value = "";

numberButtons.forEach(button => {
    
    button.addEventListener('click',(e) => {
        if (operatorClicked) {
            clearText();
            operatorClicked = false;
        }
        displayPrimary.value += button.textContent
    })
})

operatorButtons.forEach(button => {
    button.addEventListener('click',(e)=> {
        if (e.target) {
            operator = e.target.textContent;
            console.log(operator);
            if (displayPrimary.value != "") {

                if(numberOne === 0) {
                    numberOne = parseInt(displayPrimary.value)
                    operatorClicked = true;
                
                }
                else if (numberOne != 0 && !operatorClicked) {
                    numberTwo = parseInt(displayPrimary.value)
                    operatorClicked = true;
                    calculate(operator);
                    numberOne = result;
                    numberTwo = 0;
                }
                    
            }

        }
    
    })

})
            
       

equalToButton.addEventListener('click', () => {
    calculate(operator);
})
clearButton.addEventListener('click' , () => {
    clearText();
    clearField();
})

function calculate(operator)
{   
   
    numberTwo = parseInt(displayPrimary.value);
    switch(operator) {
        case '+':
            result = numberOne + numberTwo;
            displayPrimary.value = result;
            break;
        
        case '-':
            result = numberOne - numberTwo;
            displayPrimary.value = result;
            break;
        case '*':
            result = numberOne * numberTwo;
            displayPrimary.value = result;
            break;
        case '/':
            if (numberTwo === 0)
            {
                displayPrimary.value = "ERROR";
                clearField();
            }
            else
            {
                result = numberOne / numberTwo;
                displayPrimary.value = result;
            }
            break;
        }
        numberTwo = 0;
        numberOne = 0;
        operatorClicked = true;
}
                
function clearText (){
    displayPrimary.value = "";
    
}

function clearField () {
    numberOne = 0;
    numberTwo = 0;
    result = 0;
    operatorClicked = false;
}