function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
function operate(num1, num2, operation) {
  if (operation === "+") return add(num1, num2);
  else if (operation === "-") return subtract(num1, num2);
  else if (operation === "x") return multiply(num1, num2);
  else if (operation === "/") return divide(num1, num2);
}

function getOperand(e){
    if (e.pointerType === '') return;
    let content = '';
    if (e.type === 'keypress'){
        if ( (e.key >= '0' && e.key <= '9') || e.key === '.'){
            content = e.key;
        }else return;
    }
    if (e.type === 'click') content = e.target.textContent;
        
        if (operator) {
            if (operand2.includes('.') && content === '.') return;
            if (operand2.length <=9){
                operand2 += content;
                currentNumber.textContent = operand2;
            }
        } else {
        if (operand1 === '0') operand1 = ''; //to remove the default zero
        if (operand1.includes('.') && content === '.') return;
        if (operand1.length <= 9){
            operand1 += content;
            currentNumber.textContent = operand1;
        }
    }
}

function getOperator(e){
    if (e.type === 'keypress'){
        if ( e.key === '+' || e.key === '-' || e.key === 'x' || e.key === '/'){
            operator = e.key;
        }else return;
    }
    if (e.type === 'click') operator = e.target.textContent;
    previousNumber.textContent = `${operand1} ${operator}`
}

function getResult(e){
    if (e.key === "Enter" || e.type === 'click'){
        if (operand1 && operand2 && operator){
            previousNumber.textContent = `${operand1} ${operator} ${operand2} = `;
            result = operate(Number(operand1),Number(operand2),operator);
            if (Number.isInteger(result)) {
                if (result.toString().length > 10){
                    result = result.toExponential(2);
                }
            } else result = result.toPrecision(5);
            result = result.toString();
            currentNumber.textContent = result;
            operand1 = result;
            operand2 = '';
        }
    }
}

function clearScreen(e){
    if (e.pointerType === '') return;
    if (e.key === 'c' || e.type === 'click'){
        operand1 = '0';
        operand2 = '';
        operator = '';
        result = '';
        previousNumber.textContent = '';
        currentNumber.textContent = '0'
    }
}

function deleteChr(e){
    if (e.pointerType === '') return;
    if(e.key === 'Backspace' || e.type === 'click'){
        if (operator){
            operand2 = operand2.slice(0,-1);
            currentNumber.textContent = operand2;
        }else{
            operand1 = operand1.slice(0,-1);
            currentNumber.textContent = operand1;
    
        }
    }
}

let operand1 = '0';
let operand2 = '';
let operator = "";
let result = "";

const currentNumber = document.querySelector('.currentNumber');
const previousNumber = document.querySelector('.previousNumber');


document.addEventListener('keypress',getOperand)
const numbers = document.querySelectorAll(".number");
numbers.forEach((number) =>{
    number.addEventListener("click", getOperand)
});

document.addEventListener('keypress',getOperator)
const operators = document.querySelectorAll(".operator");
operators.forEach((operatorL) =>
  operatorL.addEventListener("click",getOperator));


  
const equalTo = document.querySelector('.equalTo');
equalTo.addEventListener('click', getResult);
document.addEventListener('keypress',getResult)

const clear = document.querySelector('.clear');
clear.addEventListener('click',clearScreen);
document.addEventListener('keypress',clearScreen)


const deleteButton = document.querySelector('.delete');
deleteButton.addEventListener('click',deleteChr);
document.addEventListener('keydown',deleteChr)




