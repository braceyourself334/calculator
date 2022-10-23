let operator;
let dispVal = 0;

// display number inputs
const display = document.getElementById("display");
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

//
function numInput() {}

//take an operator and 2 numbers and call operator functions on the numbers.
function operate(operator, a, b) {
  if (operator === "add") {
    return add(a, b);
  } else if (operator === "min") {
    return sub(a, b);
  } else if (operator === "mul") {
    return mul(a, b);
  } else if (operator === "div") {
    return div(a, b);
  }
}

// Basic operator functions

function add(a, b) {
  return a + b;
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
