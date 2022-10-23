let operator;
let dispVal = 0;
const display = document.getElementById("display");
let firstNumber;
let selectedOperator;

// Display number inputs
const numButtons = document.querySelectorAll(".num");
numButtons.forEach((numButton) => {
  numButton.addEventListener("click", () => {
    if (dispVal === 0) {
      dispVal = "";
    }
    dispVal = dispVal + "" + numButton.id;
    display.textContent = dispVal;
  });
});

// Take an operator and 2 numbers and call operator functions on the numbers.
function operate(operator, a, b) {
  if (operator === "add") {
    return add(a, b);
  } else if (operator === "sub") {
    return sub(a, b);
  } else if (operator === "mul") {
    return mul(a, b);
  } else if (operator === "div") {
    return div(a, b);
  }
}

// Operator buttons
const opButtons = document.querySelectorAll(".op");
opButtons.forEach((opButton) => {
  // after each operator click
  opButton.addEventListener("click", () => {
    // if firstNumber is not undefined then
    if (firstNumber !== undefined) {
      // call the selected operator function
      const result = operate(
        selectedOperator,
        parseInt(firstNumber),
        parseInt(dispVal)
      );
      display.textContent = result;
      dispVal = result;
    }
    // store which operator was clicked
    selectedOperator = opButton.id;
    // store the first number in a variable
    firstNumber = dispVal;
    // set display value to 0
    dispVal = 0;
  });
});

// Basic operator functions

function add(a, b) {
  let num1 = parseInt(a);
  let num2 = parseInt(b);
  return num1 + num2;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

// evaluate
const equalsButton = document.querySelector(".equals");
equalsButton.addEventListener("click", () => {
  // call operate function on operator, first number and dispVal
  const result = operate(selectedOperator, firstNumber, dispVal);
  // display result
  display.textContent = result;
});
