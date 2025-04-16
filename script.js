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

//DOM refference to all of the operator buttons
const operatorButtons = document.querySelectorAll(".operator-btn");

const addButton = document.querySelector("#add-btn");
const subtractButton = document.querySelector("#sub-btn");
const multiplyButton = document.querySelector("#mult-btn");
const divideButton = document.querySelector("#div-btn");
const calculateButton = document.querySelector("#calc-btn");
const clearButton = document.querySelector("#clr-btn");

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

/*For each button, add an event listener that assigns an operand the value of the button
(as assigned in the HTML and fetched via the DOM) */
digitButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const operand = button.value;
        console.log(`You press the number ${operand} button`);
        return operand;
    });
});

//Function for running the calculator operation
const operate = function(num1, num2) {
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
}