const add = function(x,y) {
	let addition = x + y;
  return addition;
};

const subtract = function(x, y) {
	let subtraction = x-y;
  return subtraction;
};
const divide = function(x,y) {
    let division = x/y ;
return division;
};
const multiply = function(x,y) {
    let division = x*y ;
return division;
};
// const sumArray = function(array) {
// 	let total= 0;
//   for(var i=0; i<array.length; i++ ){
//     total += array[i]
//   }
//   return total;
// };

// const multiplyArray = function(array) {
// 	let total= 1;
//   for(var i=0; i<array.length; i++ ){
//     total *= array[i]
//   }
//   return total;
//   //return array.reduce((a, b)=> a*b, 1)
// };

// const divideArray = function(array) {
// 	let total= 1;
//   for(var i=0; i<array.length; i++ ){
//     total /= array[i]
//   }
//   return total;
//   //return array.reduce((a, b)=> a*b, 1)
// };

// const power = function(a,b) {
// 	//return Math.pow(a,b)
//   let pow = 1;
//   for(i=0; i< b; i++){
    
//     pow *= a;
//   }
//   return pow;
// };

// const factorial = function(num) {
//   let total = 1;
//   for(var i=1; i<=num; i++ ){
//     total *= i;
//   }
//   return total;
// };

function operate(num1, num2, operator){
    if(operator ===add){
        return add(num1,num2);
    } else if(operator ===subtract){
        return subtract(num1,num2);
    } else if(operator ===multiply){
        return multiply(num1,num2);
} else if(operator ===divide){
    return divide(num1,num2);
}
}