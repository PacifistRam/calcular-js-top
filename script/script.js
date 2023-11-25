console.log('hello World')

const displayPrimary = document.querySelector('#first-ds');
const displaySecondary = document.querySelector('#second-ds');

const numberButtons = document.querySelectorAll('.no-btn')
const operatorButtons = document.querySelectorAll('.operator-btn')
const dotButton = document.querySelector('.dot-btn')
const equalToButton = document.querySelector('.equal-btn')
const clearButton = document.querySelector('.clear-btn')
const signButton = document.querySelector('.sign-btn')


let numberOne = 0;
let numberTwo = 0;
let result = 0;
let operator;
let operatorClicked = false;
let error = false;

displayPrimary.value = "";

numberButtons.forEach(button => {
    
   if(!error)
    { button.addEventListener('click',(e) => {
        if (operatorClicked) {
            clearText();
            operatorClicked = false;
        }
        displayPrimary.value += button.textContent
    })}
    else {
        clearText ()
        clearField()
    }
})

operatorButtons.forEach(button => {
    button.addEventListener('click',(e)=> {
        if (e.target) {
            operator = e.target.textContent;
            console.log(operator);
            if (displayPrimary.value != "") {

                if(numberOne === 0) {
                    numberOne = parseFloat(displayPrimary.value)
                    operatorClicked = true;
                
                }
                else if (numberOne != 0 && !operatorClicked) {
                    numberTwo = parseFloat(displayPrimary.value)
                    operatorClicked = true;
                    calculate(operator);
                    numberOne = result;
                    numberTwo = 0;
                }
                    
            }

        }
    
    })

})
            
 dotButton.addEventListener('click',() => {
    if (!error) {
        if (!displayPrimary.value.includes('.')) {
            displayPrimary.value += '.';
        }
    }

 })      

equalToButton.addEventListener('click', () => {
    if(displayPrimary.value != "")
    {
        calculate(operator);
    }

})
clearButton.addEventListener('click' , () => {
    clearText();
    clearField();
})

signButton.addEventListener('click', () => {
    if (!error) {
        if (operatorClicked) {
            clearText();
            operatorClicked = false;
        }

        // Toggle the sign of the displayed number
        displayPrimary.value = displayPrimary.value.startsWith('-')
            ? displayPrimary.value.slice(1)
            : '-' + displayPrimary.value;
    }
});

function formatNumber(num) {
    const formattedNum = parseFloat(num).toString();
    const [integerPart, decimalPart] = formattedNum.split('.');

    if (decimalPart && parseInt(decimalPart) !== 0) {
        return formattedNum;
    } else {
        return integerPart;
    }
}


function calculate(operator)
{   
    if (!error)
    {

        numberTwo = parseFloat(displayPrimary.value);
        switch(operator) {
            case '+':
                result = numberOne + numberTwo;
               
                break;
            
            case '-':
                result = numberOne - numberTwo;
               
                break;
            case '*':
                result = numberOne * numberTwo;
              
                break;
            case '/':
                if (numberTwo === 0)
                {
                    displayPrimary.value = "ERROR";
                    clearField();
                    error = true;
                    break;
                }
                else
                {
                    result = numberOne / numberTwo;
                   
                }
                break;
            }
            displayPrimary.value = formatNumber(result.toFixed)(10);
            numberTwo = 0;
            numberOne = 0;
            operatorClicked = true;
    }

}
                
function clearText (){
    displayPrimary.value = "";
    
}

function clearField () {
    numberOne = 0;
    numberTwo = 0;
    result = 0;
    operatorClicked = false;
    error = false;
}

