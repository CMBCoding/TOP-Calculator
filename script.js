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
    numberA : "",
    operator : undefined,
    numberB : "",
};
let lastestOperator = null;
let latestOperandB = null;
let justEvaluted = false;

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
digitButtons.forEach(button => {button.addEventListener("click", () => {
    const digit = button.value
    
    /*If there is not an operatorType, numberA will continue to grow with each digit button press.
    If there is an operatorType, numberB will continue to grow until calculate is clicked.*/
    if (!equationObj.operator) {
        if (justEvaluted) {
            equationObj.numberA = digit;
            display.innerText = equationObj.numberA;
            console.log(`Number A is ${equationObj.numberA}`);
            justEvaluted = false;
        } else {
            equationObj.numberA += digit;
            display.innerText = equationObj.numberA;
            console.log(`Number A is ${equationObj.numberA}`);
        }
    } else {
        equationObj.numberB += digit;
        display.innerText = equationObj.numberA + getOperatorSign(equationObj.operator) + equationObj.numberB;
        console.log(`Number B is ${equationObj.numberB}`);
    }
});
});

/*For each operation button, add an event listener that assigns and returns and operator value 
based on which button is pressed */
operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        const operatorText = button.innerText;
        const newOperatorType = button.id;
        console.log(`You pressed the ${operatorText} button (${newOperatorType})`);
        
/*If the equationObj already has numberA, numberB, and an operator; they are automatically sent over
to the operate() function. This ensures that only a pair of equations can be run at once */
        if (isEquationObjFull(equationObj)) {
            const result = operate();

            equationObj.numberA = String(result);
            equationObj.numberB = "";
            equationObj.operator = newOperatorType;
            display.innerText = result + operatorText;
        } else if (equationObj.numberA !== "") {
            if (display.innerText === equationObj.numberA) {
                display.innerText += operatorText;
            } else {
                display.innerText = equationObj.numberA + operatorText ;
            }
                equationObj.operator = newOperatorType;
        }
    });
});

/*Give the clear button functionality. Clicking it clears the display and resets the 
keys of the equationObj*/
clearButton.addEventListener("click", () => {
    display.innerText =  "";
    equationObj.numberA = [];
    equationObj.numberB = [];
    equationObj.operator = undefined;
    lastOperator = null;
    lastOperandB = null;
    justEvaluted = false;
});

/*Variable the checks to see if all the keys of the equationObj have values
It checks to see that numberA and B are arrays and not empty or another datatype, and the length 
to be verify that they contain values. The second step checks  the type of obj.operator to see if
it is not undefinied, e.i. not yet properly assigned.*/
const isEquationObjFull = function(obj) {
    return (
        equationObj.numberA !== "" &&
        equationObj.operator !== undefined && 
        equationObj.numberB !== ""
    );
};

/*Give the = button functionality. Clicking it sends the object containing operands and
operator to the operate() function*/
calculateButton.addEventListener("click", () => {
    if(isEquationObjFull(equationObj)) {
        const result = operate();
        
        if (result !== null) {
            equationObj.numberA = String(result);
            equationObj.numberB = "";
            display.innerText = result;
            justEvaluted = true;  
        } else {
            equationObj.numberA = "";
            equationObj.numberB = "";
            equationObj.operator = undefined;
            justEvaluted = false;
        }
    } else if (equationObj.numberA !== "" && lastestOperator !== null && latestOperandB !== null) {
        equationObj.operator = lastestOperator;
        equationObj.numberB = String(latestOperandB);
        const result = operate();

        if (result !== null) {
            equationObj.numberA = String(result);
            display.innerText = result;
            justEvaluted = true;
        } else {
            equationObj.numberA = "";
            equationObj.numberB = "";
            equationObj.operator = undefined;
            justEvaluted = false;
        }
    }
});

/*Give the +/- button functionality. Clicking it changes the current operand to 
positive or negative depending on its current state */
positiveNegativeButton.addEventListener("click", () => {
    //If there is not an equation operator...
    if(!equationObj.operator) {
        //And if there is a value assigned to numberA, turn numberA to a number and multiply it by -1
        if(equationObj.numberA !== "") {
            equationObj.numberA = String(Number(equationObj.numberA) * -1);
            display.innerText = equationObj.numberA;
        }
    //If there is a equeation operator
    } else {
        //And if there is a value assigned to numberB, turn numberB to a number and multiply it by -1
        if (equationObj.numberB !== "") {
            equationObj.numberB = String(Number(equationObj.numberB) * -1);

        //And then the full expression is rebuilt for the display, preventing numberB from overriding it
            display.innerText = equationObj.numberA + getOperatorSign(equationObj.operator) + equationObj.numberB;
        }
    }
});

//function that fetches the operator type to rebuild the display when pressing the +/- or Del buttons
const getOperatorSign = function(operatorId) {
    switch (operatorId) {
    case "add-btn" : return "+";
    case "sub-btn" : return "-";
    case "mult-btn" : return "x";
    case "div-btn" : return "÷";
    default: return "?";
    }
};

/*Give the del button functionality. Clicking it removes the input entered by the user. 
The function checks the object has all three keys, if one of the number keys is great than a single digit,
then removes them accordingly*/
deleteButton.addEventListener("click", () => {
    if (equationObj.numberA !== "" && equationObj.operator !== undefined && equationObj.numberB !== "") {
        if (equationObj.numberB.length > 1) {
            equationObj.numberB = equationObj.numberB.slice(0, -1);
            console.log(`Number B is ${equationObj.numberB}`);
            display.innerText = equationObj.numberA + getOperatorSign(equationObj.operator) + equationObj.numberB;
        } else {
            equationObj.numberB = "";
            display.innerText = equationObj.numberA + getOperatorSign(equationObj.operator);
        };
    } else if (equationObj.numberA !== "" && equationObj.operator !== undefined && equationObj.numberB == "") {
        equationObj.operator = undefined;
        console.log(`Number A is ${equationObj.numberA} and the operator is ${equationObj.operator}`)
        display.innerText = equationObj.numberA;
    } else if (equationObj.numberA !== "" && equationObj.operator == undefined && equationObj.numberB == "") {
        if (equationObj.numberA.length > 1) {
            equationObj.numberA = equationObj.numberA.slice(0, -1);
            console.log(`Number A is ${equationObj.numberA}`);
            display.innerText = equationObj.numberA;
        } else {
            equationObj.numberA = "";
            display.innerText = ""
        }
    }
});

//Function for running the calculator operation
/*Takes the inputs and operator sent from the calculate button, extracts them from the object,
converts the inputs to numbers, and operates*/
const operate = function() {
    const operandA = Number(equationObj.numberA);
    const operandB = Number(equationObj.numberB);
    const operatorType = equationObj.operator;
    
    console.log(`Operand A is ${operandA}`);
    console.log(`Operand B is ${operandB}`);
    console.log(`operatorType is ${operatorType}`); 
    let result;

    if (operandA === 0 && operandB === 0 && operatorType === undefined) {
        result = 0;
        display.innerText = result;
        return result;
    } else {    
        switch (operatorType) {
        case "add-btn" : result = add(operandA, operandB);
            console.log(`Result of addition is ${result}`);
        break;
        case "sub-btn" : result = subtract(operandA, operandB);
            console.log(`Result of subtraction is ${result}`);
        break;
        case "mult-btn" : result = multiply(operandA, operandB);
            console.log(`Result of multiplication is ${result}`);
        break;
        case "div-btn" : result = divide(operandA, operandB);
            console.log(`Result of division is ${result}`);
        break;
        default: 
            console.log("Unknown operator:", operatorType);
            return null;
    };

    if (operatorType !== undefined && operandB !== 0) {
        lastestOperator = operatorType;
        latestOperandB = operandB;
    }
    
    // display.innerText = result;
    //Accounting for various outlying results such as returning Infinity or division by 0
    if (result === Infinity || isNaN(result)) {
        console.log("Divide by 0");
        display.innerText = "The universe collapses"; 
        return null;
    } 
    //And decimals or other results from overflowing the display
    else {
        if (result.toString().length > 12) {
            result = Number(result.toFixed(12));
        }
    console.log(`Result is ${result}`);
    display.innerText = result;
    resetAndReturnIntegers(result);
    return result;
    }}

};

//Function that is called upon to set numberA as the result and reset numberB after each operation to clear it
const resetAndReturnIntegers = function(result) {
    equationObj.numberA = String(result);
    equationObj.numberB = "";
};