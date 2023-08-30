const pesoHTML = document.querySelector("#peso") as HTMLInputElement;
const alturaHTML = document.querySelector("#altura") as HTMLInputElement;

const calcularButton = document.querySelector(
  "#calcularButton"
) as HTMLButtonElement;
calcularButton.addEventListener("click", function () {
  const peso = parseInt(pesoHTML.value);
  const altura = parseInt(alturaHTML.value) / 100;
  calcular(peso, altura);
});

function calcular(peso: number, altura: number) {
  const resultHTML = document.querySelector("#result") as HTMLElement;

  if (peso > 0 && altura > 0) {
    const imc: number = peso / (altura * altura);
    const resultado = suPeso(imc);
    resultHTML.textContent = `Su IMC es de: ${imc.toFixed(2)} (${resultado})`;
  } else {
    resultHTML.textContent = "Ingrese datos válidos";
  }
}

function suPeso(imc: number) {
  let resultado: string = "";

  if (imc < 20) {
    resultado = "Delgadez";
  } else if (imc <= 25) {
    resultado = "Normal";
  } else if (imc <= 30) {
    resultado = "Sobrepeso";
  } else {
    resultado = "Obesidad";
  }

  return resultado;
}
