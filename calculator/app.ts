const calculatorScreen: HTMLDivElement = document.querySelector(
  "#screen"
) as HTMLDivElement;

function updateDisplay(value: string) {
  calculatorScreen.textContent = value;
}

function handleButtonClick(event: Event) {
  const button = event.target as HTMLDivElement;
  const buttonText = button.textContent;

  if (buttonText === "C") {
    updateDisplay("");
  } else if (buttonText === "⌫") {
    const currentValue = calculatorScreen.textContent || "";
    updateDisplay(currentValue.slice(0, -1));
  } else if (buttonText === "=") {
    try {
      const result = eval(calculatorScreen.textContent || "");
      updateDisplay(result.toString());
    } catch (error) {
      updateDisplay("Error");
    }
  } else {
    updateDisplay((calculatorScreen.textContent || "") + buttonText);
  }
}

const buttons: NodeListOf<HTMLDivElement> =
  document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});
