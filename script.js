// Define the initial values of the first number, the second number, the operator, and the two boolean values to track the state of the calculator
let firstValue = "";
let secondValue = "";
let operator = "";
let isOperatorChosen = false;
let isCalculationFinished = false;

// Add an event listener to the calculator div.
document.querySelector("#calculator").addEventListener('click', function(e) {
 
  let target = e.target;
  
  // If a number button was clicked
  if (target.matches('.num')) {
    // If an operator has already been chosen, add the number to the second value
    if (isOperatorChosen) {
      secondValue += target.textContent;
      document.querySelector("#display").textContent = secondValue;
    } else {
      // If a calculation was just finished, reset firstValue before adding new numbers
      if (isCalculationFinished) {
        firstValue = "";
        isCalculationFinished = false;
      }
      // If an operator has not been chosen yet, add the number to the first value
      firstValue += target.textContent;
      document.querySelector("#display").textContent = firstValue;
    }
  // If an operator button was clicked
  } else if (target.matches('.operator')) {
    // If a number hasn't been entered yet, alert the user
    if (!firstValue || isCalculationFinished) {
      alert("You need to enter a number first");
    } else if (!isOperatorChosen) {
      // If an operator hasn't been chosen yet, set the operator
      isOperatorChosen = true;
      operator = target.textContent;
    } else {
      // If an operator has already been chosen, alert the user
      alert("You've already chosen an operator");
    }
  // If the clear button was clicked
  } else if (target.matches('#clear')) {
    // Reset the calculator to the initial state
    firstValue = "";
    secondValue = "";
    operator = "";
    isOperatorChosen = false;
    isCalculationFinished = false;
    document.querySelector("#display").textContent = "0";
  // If the equals button was clicked
  } else if (target.matches('#equals')) {
    // If two numbers and an operator have been chosen, perform the calculation
    if (firstValue && secondValue && isOperatorChosen) {
      isCalculationFinished = true;
      switch (operator) {
        case "+":
          firstValue = (parseFloat(firstValue) + parseFloat(secondValue)).toString();
          break;
        case "-":
          firstValue = (parseFloat(firstValue) - parseFloat(secondValue)).toString();
          break;
        case "*":
          firstValue = (parseFloat(firstValue) * parseFloat(secondValue)).toString();
          break;
        case "/":
          firstValue = (parseFloat(firstValue) / parseFloat(secondValue)).toString();
          break;
      }
      document.querySelector("#display").textContent = firstValue;
      secondValue = "";
      isOperatorChosen = false;
    } else {
      // If two numbers and an operator haven't been chosen yet, alert the user
      alert("You need to choose an operator and a second number first");
    }
  }
});
