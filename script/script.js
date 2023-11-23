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

numberButtons.forEach(button => {
    button.addEventListener('click',(e) => {
        displayPrimary.value += button.textContent
    })
})

operatorButtons.forEach(button => {
    button.addEventListener('click',(e)=> {
        let operator = e.target.textContent;
        //console.log(`You have Pressed ${operator}`);
        if(numberOne === 0)
        {
        numberOne = parseInt(displayPrimary.value)
        displayPrimary.value = ""
        console.log(`number One: ${numberOne}`)
        }
        else if (numberTwo === 0)
        {
        numberTwo = parseInt(displayPrimary.value)
        displayPrimary.value = ""
        console.log(`number Two: ${numberTwo}`)
        }
        else if(numberOne != 0 && numberTwo != 0)
        {
            calculate(operator);
        }
    })
})


clearButton.addEventListener('click' , () => {
    clearText();
})

function calculate(operator)
{
    switch(operator) {
        case '+':
            let sum = numberOne + numberTwo;
            displayPrimary.value = sum.toString()
    }
}
function clearText (){
    displayPrimary.value = "";
}