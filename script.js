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

numButtons.forEach((numButton) =>
  numButton.addEventListener("click", () => numInput(numButton.textContent))
);

// opButtons.forEach((opButton) =>
//   opButton.addEventListener("click", () => opSelection(opButton.textContent))
// );

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

// Operator buttons
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
    return "Please...";
  } else {
    return a / b;
  }
}

// evaluate
equalsButton.addEventListener("click", () => {
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
});

// Clear
clearButton.addEventListener("click", () => {
  dispVal = 0;
  operator = undefined;
  firstNumber = undefined;
  selectedOperator = undefined;
  display.textContent = dispVal;
});

// decimal
decButton.addEventListener("click", () => {
  if (dispVal.includes(".") == false) {
    dispVal = dispVal + ".";
    display.textContent = dispVal;
  }
});

// percent
perButton.addEventListener("click", () => {
  dispVal = dispVal / 100;
  display.textContent = dispVal;
});

// negative
negButton.addEventListener("click", () => {
  dispVal = dispVal * -1;
  display.textContent = dispVal;
});

// backspace
backButton.addEventListener("click", () => {
  if (dispVal.length <= 1) {
    dispVal = 0;
  } else {
    dispVal = dispVal.slice(0, -1);
  }
  display.textContent = dispVal;
  //   dispVal = sliced;
});

// keyboard functionality
// window.addEventListener("keydown", keyboardInput);
// function keyboardInput(e) {
//   if (e.key >= 0 && e.key <= 9) {
//     if (dispVal === 0) {
//       // clear a 0
//       dispVal = "";
//     }
//     // display length limiter
//     if (dispVal.length < 8) {
//       dispVal = dispVal + "" + e.key;
//     }
//     //update display
//     display.textContent = dispVal;
//   }
// }
