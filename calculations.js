function add(a,b){ return a+b;}
function subtract(a,b){return a-b;}
function multiply(a,b){return a*b;}
function divide(a,b){return a/b;}

function operate (operation,a,b){
    a = parseInt(a);
    b = parseInt(b);
    if(operation === '+')
        return add(a,b);
    if(operation === '-')
        return subtract(a,b);
    if(operation === '*')
        return multiply(a,b);
    if(operation === '/')
        return divide(a,b);
}

function calculate (numbers,operations){

    let temp = numbers[0];
    while(operations != null)
    {
        numbers.shift();
        temp = operate(operations[0],temp,numbers[0]);
        operations.shift();
    }
    return temp;
}

let numbers = [];
let operations = [];
let currentNum = '';

const display = document.querySelector('.display');

const buttons = document.querySelectorAll('[class$=Butt]:not(.backspaceButt,.resButt,.equalButt,.dotButt)');

buttons.forEach(button => {
    button.addEventListener('click',(button) => {
        display.textContent += button.target.textContent;
        if(!isNaN(button.target.textContent))
      {  currentNum +=button.target.textContent;
        console.log(currentNum);
      }
        else
        {
            numbers.push(currentNum);
            currentNum = '';
            operations.push(button.target.textContent);
        }
    });
});

const resButt = document.querySelector('.resButt');
const equalButt = document.querySelector('.equalButt');
const backspaceButt = document.querySelector('.backspaceButt');
const dotButt = document.querySelector('.dotButt');

resButt.addEventListener('click', () => {
    display.textContent = '';
    numbers = [];
    operations = [];
});

backspaceButt.addEventListener('click', () => {
    let last = display.textContent.length;
    display.textContent = display.textContent.slice(0,last-1);
    currentNum = currentNum.slice(0,currentNum.length-1);
});

 equalButt.addEventListener('click', () => {
        let temp;
        temp = calculate(numbers,operations);
        display.textContent = temp;
 });



