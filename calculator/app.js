var calculatorScreen = document.querySelector("#screen");
function updateDisplay(value) {
    calculatorScreen.textContent = value;
}
function handleButtonClick(event) {
    var button = event.target;
    var buttonText = button.textContent;
    if (buttonText === "C") {
        updateDisplay("");
    }
    else if (buttonText === "⌫") {
        var currentValue = calculatorScreen.textContent || "";
        updateDisplay(currentValue.slice(0, -1));
    }
    else if (buttonText === "=") {
        try {
            var result = eval(calculatorScreen.textContent || "");
            updateDisplay(result.toString());
        }
        catch (error) {
            updateDisplay("Error");
        }
    }
    else {
        updateDisplay((calculatorScreen.textContent || "") + buttonText);
    }
}
var buttons = document.querySelectorAll(".button");
buttons.forEach(function (button) {
    button.addEventListener("click", handleButtonClick);
});
