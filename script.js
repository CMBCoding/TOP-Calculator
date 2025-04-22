//DOM refferences to the buttons of the calculator
const nineButton = document.querySelector("#nine-btn");
const eightButton = document.querySelector("#eight-btn");
const sevenButton = document.querySelector("#seven-btn");
const sixButton = document.querySelector("#six-btn");
const fiveButton = document.querySelector("#five-btn");
const fourButton = document.querySelector("#four-btn");
const threeButton = document.querySelector("#three-btn");
const twoButton = document.querySelector("#two-btn");
const oneButton = document.querySelector("#one-btn"); 

//DOM refference to all of the digit buttons
const digitButtons = document.querySelectorAll(".digit-btn");

////DOM refference to all of buttons
const allButtons = document.querySelectorAll(".btn");

//Variable that counts the new of times the number keys are pressed
let digitPress = 0;

//Object for holding the operand 1, operator, and operand 2
const equationObj = {
    numberA : [],
    operator : undefined,
    numberB : [],
};

/*Variables for holding the two operands, the operator for use in the operate() function, 
and the operator count for use is evaluations > a pair */
let operatorCount = 0;

//DOM refference to all of the operator buttons
const operatorButtons = document.querySelectorAll(".operator-btn");
const addButton = document.querySelector("#add-btn");
const subtractButton = document.querySelector("#sub-btn");
const multiplyButton = document.querySelector("#mult-btn");
const divideButton = document.querySelector("#div-btn");

//DOM refferences to the calculate, clear, delete, positive/negative buttons and the display
const calculateButton = document.querySelector("#calc-btn");
const clearButton = document.querySelector("#clr-btn");
const deleteButton = document.querySelector("#del-btn");
const positiveNegativeButton = document.querySelector("#plus-minus-btn");
const display = document.querySelector("#display");

//Function for the add button
const add = function(a, b) {
    return answer = a + b;
};

//Function for the subtract button
const subtract = function(a, b) {
    return answer = a - b;
};

//Function for the multiply button
const multiply = function(a, b) {
    return answer = a * b;
};

//Function for the divide button
const divide = function(a, b) {
    return answer = a / b;
};

/*For each digit button, add an event listener that assigns an operand the value of the button
(as assigned in the HTML and fetched via the DOM)*/
digitButtons.forEach(button => {
button.addEventListener("click", (event) => {
    const operand = button.value
    const operatorType = equationObj.operator;
    display.innerText += button.value;
    console.log(`You pressed the number ${operand} button`);
    
    //If there is not an operatorType, numberA will continue to grow with each digit button press.
    if (!operatorType) {
        equationObj.numberA += operand;
        console.log(`Operator count is ${operatorCount}`)
        console.log(`Number A is ${equationObj.numberA}`)
        return;
    } 

    //If there is an operatorType, numberB will continue to grow until calculate is clicked.
    if (operatorType && equationObj.numberA) {
        equationObj.numberB += operand;
        console.log(`Number B is ${equationObj.numberB}`);
        return;
    }
})});

/*For each operation button, add an event listener that assigns and returns and operator value 
based on which button is pressed */
operatorButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        const operatorText = button.innerText;
        const newOperatorType = button.id;
        equationObj.operator = button.id;
        operatorCount += 1;
        console.log(`You pressed the ${operatorText} button (${newOperatorType})`);
        
/*If there is more than one operator button press and already numberA and B, operate is called and ran
allowing for only a pair of equations to be run at once */
        if (operatorCount > 1 && equationObj.numberA && equationObj.numberB) {
            let result = operate(equation);
            display.innerText = result + operatorText;
            console.log(`Pair equation executed, the returned values is ${numberA}`);
            result = numberA;
            numberB = "";
            operatorCount = 1;
        } else {
            display.innerText += operatorText;
        } 

    operatorType = newOperatorType;
    return operatorType;
    });
});

//Give the clear button functionality
clearButton.addEventListener("click", () => {
    display.innerText =  "";
    numberA = "";
    numberB = "";
    operatorType = undefined;
    operatorCount = 0;
});

/*Give the = button functionality. Clicking it sends the object containing operands and
operator to the operate function*/
calculateButton.addEventListener("click", () => {
    result = operate(equationObj);
});

/*Give the +/- button functionality. Clicking it changes the current operand to 
positive or negative depending on its current state */
positiveNegativeButton.addEventListener("click", () => {
})

/*Give the del button functionality. Clicking it removes the input entered by the user. */
deleteButton.addEventListener("click", () => {
    console.log(`${display.innerText.length}`)
});

//Function for running the calculator operation
/*Takes the inputs and operator sent from the calculate button, extracts them from the object,
converts the inputs to numbers, and operates*/
const operate = function(equationObj) {
    let operandA = Number(equationObj.numberA);
    let operandB = Number(equationObj.numberB);
    let operatorType = equationObj.operator;
    
    let result;
    console.log(`Operand A is ${operandA}`);
    console.log(`Operand B is ${operandB}`);
    console.log(`operatorType is ${operatorType}`); 

    switch (operatorType) {
        case "add-btn" : console.log(`Add`);
            result = add(operandA, operandB);
            console.log(result);
        break;
        case "sub-btn" : console.log(`Subtract`,
            result = subtract(operandA, operandB)
        );
        break;
        case "mult-btn" : console.log(`Multiply`,
            result = multiply(operandA, operandB)
        );
        break;
        case "div-btn" : console.log(`Divide`,
            result = divide(operandA, operandB)
        );
        break;
        default: 
            console.log("Unknown operator", operatorType);
            return null;
    };

    display.innerText = result;
    //Accounting for various outlying results
    if (result === Infinity) {
        console.log("Divide by 0");
        display.innerText = "The universe collapses"; 
    } 
    else {
        console.log(`Result is ${result}`);
        resetAndReturnIntegers(result);
    }

    return result;
};

//Function that is called upon to set numberA as the result and reset numberB after each operation to clear it
const resetAndReturnIntegers = function(result) {
    numberA = result;
    numberB = "";
};