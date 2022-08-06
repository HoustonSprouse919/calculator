let displayValue = ""; //global variable used for displaying and also math
let operator = ""
let firstNum = ""
let op = ""
function num(num){ //adds full functionality for pressing all the numbered buttons
    displayValue = displayValue + num;
    popDisplay();
    return displayValue;
}

function clearDisplay(){  //for some reason using clear as the function name wouldnt work
    displayValue = "0";
    popDisplay();
    return displayValue;
  }
function signs(sign) {
  operator = sign
  firstNum = displayValue;
  displayValue = ""
  display.textContent =  displayValue;

}


function equal() {
  let num1 = parseInt(firstNum);
  let num2 = parseInt(displayValue);
  console.log(num1);
 displayValue = operate(num1, num2, operator);
    popDisplay();
}
function operate(num1, num2, operator) {
  if (operator === plus) {
    op = add(num1, num2);
  } else if (operator === subtract) {
    op = subtract(num1, num2);
  } else if (operator === multiply) {
    op = multiply(num1, num2);
  } else if (operator === divide) {
    op = divide(num1, num2);
  }
  return op;
}
function popDisplay() {
  display.textContent =  displayValue;

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