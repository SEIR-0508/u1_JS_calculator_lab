let currentInput = "";
let previousInput = "";
let operation = null;

const display = document.getElementById("display");

document.querySelector(".buttons").addEventListener("click", function(event) {
    const target = event.target;

    if (target.classList.contains("num")) {
        currentInput += target.value;
        display.textContent = currentInput;
    } else if (target.classList.contains("op")) {
        if (previousInput) {
            compute();
        }
        operation = target.value;
        previousInput = currentInput;
        currentInput = "";
    } else if (target.id === "equals") {
        compute();
    } else if (target.id === "clear") {
        currentInput = "";
        previousInput = "";
        operation = null;
        display.textContent = "0";
    }
});

function compute() {
    previousInput = parseFloat(previousInput);
    currentInput = parseFloat(currentInput);

    switch (operation) {
        case "+":
            currentInput = previousInput + currentInput;
            break;
        case "-":
            currentInput = previousInput - currentInput;
            break;
        case "*":
            currentInput = previousInput * currentInput;
            break;
        case "/":
            currentInput = previousInput / currentInput;
            break;
    }

    display.textContent = currentInput;
    previousInput = "";
    operation = null;
}
// I used chatGPT