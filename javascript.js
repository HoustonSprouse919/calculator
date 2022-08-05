let displayValue = "";
function num(num){
    displayValue = displayValue + num;
    popDisplay();
    console.log(displayValue)
}

function clear(){
    displayValue = "";
    popDisplay();
    console.log(displayValue)
  }
function multiply() {
  
}

function divide() {
  
}

function equal() {
    popDisplay();
}
  function decimal() {
    displayValue += "1";
  }
  function plus() {
    displayValue += "1";
  }
  function minus() {
    displayValue += "1";
  }
function add(x, y) {
  let addition = x + y;
  return addition;
}

function subtract(x, y) {
  let subtraction = x - y;
  return subtraction;
}
function divide(x, y) {
  let division = x / y;
  return division;
}
function multiply(x, y) {
  let division = x * y;
  return division;
}

let operation = "";
function operate(num1, num2, operator) {
  if (operator === add) {
    return add(num1, num2);
  } else if (operator === subtract) {
    return subtract(num1, num2);
  } else if (operator === multiply) {
    return multiply(num1, num2);
  } else if (operator === divide) {
    return divide(num1, num2);
  }
}
function popDisplay() {
  display.textContent =  displayValue;

}
