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
let numberA = undefined;
let numberB = undefined;
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

/* function getOperator(event) {
    const buttonId = event.target.id;
    let value;

    switch (buttonId) {
        case buttonId = "one=btn" :
        value = 1;
        console.log(`${this.value}`);
        break;
    }
} */

/* oneButton.addEventListener('click', () => {
    console.log("One button clicked");
    if (operandOne == "") {
        console.log("One button clicked");
        return operandTwo = 1;
    } else {
        console.log("One button clicked");
        return operandOne = 1; 
    }
}) */

//Function for getting the operator for use in the operate function
// const getOperator = addEventListener("click", () => {
//     if (addButton) {
//         operator = add;
//     } else if (subtractButton) {
//         operator = subtract 
//     } else if (multiplyButton) {
//         operator = multiply;
//     } else if (divideButton) {
//         operator = divide;
//     }
//     return operator;
// })

//Looping through the NodeList created by the query selector selecting all digit buttons, 
// adding an event to each

/*For each digit button, add an event listener that assigns an operand the value of the button
(as assigned in the HTML and fetched via the DOM) */
digitButtons.forEach(button => {
button.addEventListener("click", (event) => {
    const operand = button.value;
    display.innerText += button.value;
    console.log(`You pressed the number ${operand} button`);
    digitPress++;
    if (digitPress === 1) {
        numberA = button.value;
        console.log(`Number A is ${numberA}`)
        return numberA;
    } else if (digitPress > 1) {
        numberB = button.value;
        console.log(`Number B is ${numberB}`);
        return numberB;
    } 
    // else if (digitPress > 2) {
    //     resetDigitPress;
    // }
    console.log(`The number of digit presses is ${digitPress}`)
    });
});

// function resetDigitPress() {
//     digitPress = 0;
// };

/*For each operation button, add an event listener that assigns and returns and operator value 
based on which button is pressed */
operatorButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        const operatorText = button.innerText;
        operatorType = button.id;
        display.innerText += button.innerText;
        console.log(`You pressed the ${operatorText} button (${operatorType})`);
        return operatorType;
        // checkOperator(operatorType);
        // operate(operator);
    });
});

//Give the clear button functionality
clearButton.addEventListener("click", () => {
    display.innerText =  "";
    numberA = undefined;
    numberB = undefined;
    operatorType = undefined;
    digitPress = 0;
})

//Give the = button functionality, clicking it gets the operands, operatorType and runs the operate function
calculateButton.addEventListener("click", () => {
    // if ( numberB & operatorType) {
        
    // } 
    operate(numberA, numberB, operatorType);
})

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
    }

}

//Function that checks the operator type from the operator button pressed and passes it on to operate
const checkOperator = function(buttonValue) {
    switch (buttonValue) {
        case "add-btn" : console.log(`Add`
            //add(2,2)
        );
        break;
        case "sub-btn" : console.log(`Subtract`
            //subtract(10,2)
        );
        break;
        case "mult-btn" : console.log(`Multiply`
            //multiply(5,5)
        );
        break;
        case "div-btn" : console.log(`Divide`
            //divide (40, 2)
        );
        break;
    }
};

/*const operate = function(num1, num2) {
   let a = num1;    
   let b = num2;    
   let answer;
   
   operator = getOperator();
   
   if (operator === addButton) {
        add(a, b);
   } else if (operator === subtractButton) {
        subtract(a,b);
   } else if (operator === multiplyButton) {
        multiply(a,b);
   } else if (operator === divideButton) {
        divide(a,b);
   };
   return answer;
}*/