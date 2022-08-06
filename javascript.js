let displayValue = ""; //global variable used for displaying and also math
let operator = "";
let firstNum = "";
let op = "";
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
  operator = sign;
  firstNum = displayValue;
  displayValue = ""
  display.textContent =  displayValue;

}


function equal() {
 let num1 = parseInt(firstNum);  //these two are correctly giving numbers
 let num2 = parseInt(displayValue);
 console.log(num1);
 console.log(typeof num1);
 console.log(num2);
 console.log(typeof num2);
 console.log(operator);
 console.log(typeof operator);
 
 displayValue = operate(num1,num2,operator);
    popDisplay();
    console.log(displayValue)
}
function operate(num1, num2, operator) { //this is used to call the actual operations
  if (operator == "add") {  //note not having the operation names as strings with "" caused it to not work
    op = add(num1, num2);
  } else if (operator == "subtract") {
    op = subtract(num1, num2);
  } else if (operator == "multiply") {
    op = multiply(num1, num2);
  } else if (operator == "divide") {
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
  console.log(operate(7, 3, subtract));