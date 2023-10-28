const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//to get user input

function getUserImput(){
    return parseInt(userInput.value);
}

function createWriteOutput(operator, resultBeforeCalculation, calcNumber) {
    //to run the current result before it's changed
    const calcDescription = `${resultBeforeCalculation} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); //from vendor file 
}

function writeToLog(
    operationIdentifier, 
    prevResult, 
    keyedNumber, 
    newResult){
        const logEntry = {
            operation: operationIdentifier,
            prevResult: prevResult,
            number: keyedNumber,
            result: newResult
        };
        logEntries.push(logEntry);
        console.log(logEntry.operation);
        console.log(logEntries);
}

//for the calculator addition - see vendor.js for userInput
function addition() {
    const keyedNumber = getUserImput();
    const initialResult = currentResult;
    //to run the current result before it's changed
    // const calcDescription = `${currentResult} + ${keyedNumber}`;
    currentResult += keyedNumber;
    // or     currentResult = currentResult + +userInput.value;
    //from Vendor.js file line 10 - use outputResult
    // outputResult(currentResult, calcDescription);
    createWriteOutput('+', initialResult, keyedNumber);
    writeToLog('ADD', initialResult, keyedNumber, currentResult);
}

function subtract() {
    const keyedNumber = getUserImput();
    const initialResult = currentResult;
    currentResult -= keyedNumber;
    createWriteOutput('-', initialResult, keyedNumber);
    writeToLog('SUBTRACT', initialResult, keyedNumber, currentResult);
}

function multiply() {
    const keyedNumber = getUserImput();
    const initialResult = currentResult;
    currentResult *= keyedNumber;
    createWriteOutput('*', initialResult, keyedNumber);
    writeToLog('MULTIPLY', initialResult, keyedNumber, currentResult);
}

function divide() {
    const keyedNumber = getUserImput();
    const initialResult = currentResult;
    currentResult /= keyedNumber;
    createWriteOutput('/', initialResult, keyedNumber);
    writeToLog('DIVIDE', initialResult, keyedNumber, currentResult);
}

addBtn.addEventListener('click', addition);
// currentResult = addition(1, 2);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

//template literal between the ` `
let calculationDescription = `${defaultResult}`;



// addition();
