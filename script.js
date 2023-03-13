function add(num1,num2){
    return num1 + num2;
}
function subtract(num1,num2){
    return num1 - num2;
}
function multiply(num1,num2){
    return num1 * num2;
}
function divide(num1,num2){
    return num1 / num2;
}
function operate(num1,num2,operation){
    if (operation === '+') return add(num1,num2);
    else if (operation === '-') return subtract(num1,num2);
    else if (operation === 'x') return multiply(num1,num2);
    else if (operation === '/') return divide(num1,num2);
}

function getOperand(){
    const numbers = document.querySelectorAll('.number');
    numbers.forEach(number => number.addEventListener('click',(e)=>{
        return e.target.textContent;
    }));
}
