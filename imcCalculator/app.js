var pesoHTML = document.querySelector("#peso");
var alturaHTML = document.querySelector("#altura");
var calcularButton = document.querySelector("#calcularButton");
calcularButton.addEventListener("click", function () {
    var peso = parseInt(pesoHTML.value);
    var altura = parseInt(alturaHTML.value) / 100;
    calcular(peso, altura);
});
function calcular(peso, altura) {
    var resultHTML = document.querySelector("#result");
    if (peso > 0 && altura > 0) {
        var imc = peso / (altura * altura);
        var resultado = suPeso(imc);
        resultHTML.textContent = "Su IMC es de: ".concat(imc.toFixed(2), " (").concat(resultado, ")");
    }
    else {
        resultHTML.textContent = "Ingrese datos válidos";
    }
}
function suPeso(imc) {
    var resultado = "";
    if (imc < 20) {
        resultado = "Delgadez";
    }
    else if (imc <= 25) {
        resultado = "Normal";
    }
    else if (imc <= 30) {
        resultado = "Sobrepeso";
    }
    else {
        resultado = "Obesidad";
    }
    return resultado;
}
