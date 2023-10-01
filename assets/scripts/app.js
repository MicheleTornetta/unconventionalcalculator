const defaultResult = 0;
let currentResult = defaultResult;

//to get user input

function getUserImput(){
    return parseInt(userInput.value);
}

function createWriteOutput(operator, resultBeforeCalculation, calcNumber) {
    //to run the current result before it's changed
    const calcDescription = `${resultBeforeCalculation} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

//for the calculator addition - see vendor.js for userInput
function addition() {
    const keyedNumber = getUserImput();
    const initialResult = currentResult;
    //to run the current result before it's changed
    // const calcDescription = `${currentResult} + ${keyedNumber}`;
    currentResult = currentResult + keyedNumber;
    // or     currentResult = currentResult + +userInput.value;
    //from Vendor.js file line 10 - use outputResult
    // outputResult(currentResult, calcDescription);
    createWriteOutput('+', initialResult, keyedNumber);
}

function subtract() {
    const keyedNumber = getUserImput();
    const initialResult = currentResult;
    currentResult = currentResult - keyedNumber;
    createWriteOutput('-', initialResult, keyedNumber);
}

function multiply() {
    const keyedNumber = getUserImput();
    const initialResult = currentResult;
    currentResult = currentResult * keyedNumber;
    createWriteOutput('*', initialResult, keyedNumber);
}

function divide() {
    const keyedNumber = getUserImput();
    const initialResult = currentResult;
    currentResult = currentResult / keyedNumber;
    createWriteOutput('/', initialResult, keyedNumber);
}

addBtn.addEventListener('click', addition);
// currentResult = addition(1, 2);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

//template literal between the ` `
let calculationDescription = `${defaultResult}`;



// addition();
