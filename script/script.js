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




clearButton.addEventListener('click' , () => {
    clearText();
})


function clearText (){
    displayPrimary.value = "";
}