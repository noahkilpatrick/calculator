
//variables for operands
let num1 = 0;
let num2 = 0;
let op = 0; //+ = 1, - = 2, * = 3, / = 4



//operator functions
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
    if(num2 === 0) {
        return "dont divide by zero dumbass";
    }
    return num1 / num2;
}
//calculator logic
function operate(op) {
    if(op === 1) {
        return add(num1,num2);
    }
    else if(op === 2) {
        return subtract(num1,num2);
    }
    else if(op === 3) {
        return multiply(num1,num2);
    }
    else if(op === 4) {
        return divide(num1,num2);
    }
    else {
        return null;
    }
}


