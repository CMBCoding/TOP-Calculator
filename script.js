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

//Variable that counts the new of times the number keys are pressed
let digitPress = 0;

//Variables for holding the two operands and the operator for use in the operate() function
let numberA = "";
let numberB = "";
let operatorType = undefined;

//DOM refference to all of the operator buttons
const operatorButtons = document.querySelectorAll(".operator-btn");
const addButton = document.querySelector("#add-btn");
const subtractButton = document.querySelector("#sub-btn");
const multiplyButton = document.querySelector("#mult-btn");
const divideButton = document.querySelector("#div-btn");

//DOM refferences to the calculate and clear buttons and the display
const calculateButton = document.querySelector("#calc-btn");
const clearButton = document.querySelector("#clr-btn");
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
    const operand = button.value;
    display.innerText += button.value;
    console.log(`You pressed the number ${operand} button`);
    //If there is not an operatorType, numberA will continue to grow with each digit button press.
    if (!operatorType) {
        numberA += button.value;
        console.log(`Number A is ${numberA}`)
        return numberA;
    } 
    //If there is an operatorType, number will continue to grow until calculate is clicked.
    else {
        numberB += button.value;
        console.log(`Number B is ${numberB}`);
        return numberB;
    } 
    // console.log(`The number of digit presses is ${digitPress}`)
    });
});

/*For each operation button, add an event listener that assigns and returns and operator value 
based on which button is pressed */
operatorButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        const operatorText = button.innerText;
        operatorType = button.id;
        display.innerText += button.innerText;
        console.log(`You pressed the ${operatorText} button (${operatorType})`);
        return operatorType;
    });
});

//Give the clear button functionality
clearButton.addEventListener("click", () => {
    display.innerText =  "";
    numberA = "";
    numberB = "";
    operatorType = undefined;
});

/*Give the = button functionality, clicking it gets the operands, 
operatorType and runs the operate function*/
calculateButton.addEventListener("click", () => {
    operate(numberA, numberB, operatorType);
});

//Function for running the calculator operation
/*Takes the inputs and operator sent from the calculate button, 
converts the inputs to numbers, and operates*/
const operate = function(numberA, numberB, operatorType) {
    console.log(`${numberA} has been recieved`);
    console.log(`${numberB} has been recieved`);
    console.log(`${operatorType} has been recieved`);

    let operandA = Number(numberA);
    let operandB = Number(numberB);
    console.log(`Operand A is ${operandA}`);
    console.log(`Operand B is ${operandB}`);
    
    switch (operatorType) {
        case "add-btn" : console.log(`Add`,
           display.innerText = add(operandA, operandB)
        );
        break;
        case "sub-btn" : console.log(`Subtract`,
            display.innerText = subtract(operandA, operandB)
        );
        break;
        case "mult-btn" : console.log(`Multiply`,
            display.innerText = multiply(operandA, operandB)
        );
        break;
        case "div-btn" : console.log(`Divide`,
            display.innerText = divide (operandA, operandB)
        );
        break;
    };

};