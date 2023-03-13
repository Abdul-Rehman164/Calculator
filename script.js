function add(num1,num2){
    console.log(num1 + num2) ;
}
function subtract(num1,num2){
    console.log(num1 - num2) ;
}
function multiply(num1,num2){
    console.log(num1 * num2) ;
}
function divide(num1,num2){
    console.log(num1 / num2) ;
}
function operate(num1,num2,operation){
    if (operation === '+') add(num1,num2);
    else if (operation === '-') subtract(num1,num2);
    else if (operation === 'x') multiply(num1,num2);
    else if (operation === '/') divide(num1,num2);
}
