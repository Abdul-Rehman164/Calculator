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
let operand1 = "";
let operand2 = "";
let operator = "";
let result = "";

const numbers = document.querySelectorAll(".number");
numbers.forEach((number) =>
  number.addEventListener("click", (e) => {
    if (operator) {
      operand2 += e.target.textContent;
      console.log({ operand2 });
    } else {
      operand1 += e.target.textContent;
      console.log({ operand1 });
    }
  })
);

const operators = document.querySelectorAll(".operator");
operators.forEach((operatorL) =>
  operatorL.addEventListener("click", (e) => {
    operator += e.target.textContent;
  })
);
