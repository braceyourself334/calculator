let operator;
let dispVal = 0;
let firstNumber;
let selectedOperator;

// Button Selectors
const display = document.getElementById("display");
const numButtons = document.querySelectorAll(".num");
const opButtons = document.querySelectorAll(".op");
const equalsButton = document.querySelector("#equals");
const clearButton = document.querySelector("#clear");
const backButton = document.querySelector("#back");
const decButton = document.querySelector("#dec");
const negButton = document.querySelector("#neg");
const perButton = document.querySelector("#per");

// Button Listeners
window.addEventListener("keydown", keyboardInput);
clearButton.addEventListener("click", clear);
decButton.addEventListener("click", decimal);
perButton.addEventListener("click", percent);
negButton.addEventListener("click", negative);
backButton.addEventListener("click", backspace);
equalsButton.addEventListener("click", equals);

numButtons.forEach((numButton) =>
  numButton.addEventListener("click", () => numInput(numButton.textContent))
);

opButtons.forEach((opButton) =>
  opButton.addEventListener("click", () => opSelection(opButton.id))
);

function keyboardInput(e) {
  if (e.key >= 0 && e.key <= 9) numInput(e.key);
  if (e.key === ".") decimal();
  if (e.key === "=") equals();
  if (e.key === "Backspace") backspace();
  if (e.key === "Escape") clear();
  if (e.key === "+") opSelection(add);
  if (e.key === "-") opSelection(sub);
  if (e.key === "*") opSelection(mul);
  if (e.key === "/") opSelection(div);
}

// Number input
function numInput(number) {
  if (dispVal === 0) {
    dispVal = "";
  }
  if (dispVal.length < 8) {
    dispVal = dispVal + "" + number;
  }
  display.textContent = dispVal;
}

// Operator Selection
function opSelection(operator) {
  // if not first number, calculate
  if (firstNumber !== undefined) {
    const result = operate(
      selectedOperator,
      parseFloat(firstNumber),
      parseFloat(dispVal)
    );
    display.textContent = result;
    dispVal = result;
  }
  // Otherwise store operator and number
  selectedOperator = operator;
  firstNumber = dispVal;
  dispVal = 0;
}

// Function buttons
function clear() {
  dispVal = 0;
  operator = undefined;
  firstNumber = undefined;
  selectedOperator = undefined;
  display.textContent = dispVal;
}

function decimal() {
  if (dispVal.includes(".") == false) {
    dispVal = dispVal + ".";
    display.textContent = dispVal;
  }
}

function percent() {
  dispVal = dispVal / 100;
  display.textContent = dispVal;
}

function negative() {
  dispVal = dispVal * -1 + "";
  display.textContent = dispVal;
}

function backspace() {
  if (dispVal.length <= 1) {
    dispVal = 0;
  } else {
    dispVal = dispVal.slice(0, -1);
  }
  display.textContent = dispVal;
}

// Calculation
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

// Basic operator functions
function add(a, b) {
  let num1 = parseFloat(a);
  let num2 = parseFloat(b);
  return num1 + num2;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  if (a == 0 || b == 0) {
    return "You are SMRT";
  } else {
    return a / b;
  }
}

// evaluate
function equals() {
  // check if operator has been selected
  if (selectedOperator !== undefined) {
    // call operate function on operator, first number and dispVal
    const result = operate(selectedOperator, firstNumber, dispVal);
    // display result
    display.textContent = result;
    selectedOperator = undefined;
    firstNumber = undefined;
    dispVal = result + "";
  }
}
