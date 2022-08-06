let displayValue = ""; //global variables used for displaying and also math
let operator = "";
let firstNum = "";
let op = "";
let numOp = 0;

function num(num){ //adds full functionality for pressing all the numbered buttons
    displayValue = displayValue + num;
    popDisplay();
    return displayValue;
}

function clearDisplay(){  //used to clearDisplay and data completely for some reason using clear as the function name wouldn't work
    displayValue = "clear";
    popDisplay();
    operator = "";
    firstNum = "";
    op = "";
    numOp = 0;
    displayValue = "";
  }
function signs(sign) { //this is used to take in whatever sign the user presses, It also helps keep track of how many have been pressed to let them string together multiple
  if(numOp== 0){
  operator = sign;
  firstNum = displayValue;
  displayValue = ""
  display.textContent =  sign;
  numOp =1;
  } else if(numOp >0){
    equal();
    operator = sign;
    firstNum = displayValue;
    displayValue = ""
    display.textContent =  sign;
    numOp== 0;
  }
}


function equal() {
 let num1 = parseInt(firstNum);  //numbers used for the calculation that we NEED to change to int!
 let num2 = parseInt(displayValue);
 if(num1 == 0 && num2 ==0){
 displayValue = "Nice Try";
    popDisplay();
    operator = "";
    firstNum = "";
    op = "";
    numOp = 0;
    displayValue = "";
 } else{
 let operation = operate(num1,num2,operator);
 displayValue = operation.toString();
    popDisplay();
}
}
function operate(num1, num2, operator) { //this is used to call the actual operations
  if (operator == "+") {  //note not having the operation names as strings with "" caused it to not work
    op = add(num1, num2);
  } else if (operator == "-") {
    op = subtract(num1, num2);
  } else if (operator == "*") {
    op = multiply(num1, num2);
  } else if (operator == "/") {
    op = divide(num1, num2);
  }
  return op;
}
function popDisplay() {
  display.textContent =  displayValue;
}

//simple functions that we call in our operate function
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
  popDisplay();