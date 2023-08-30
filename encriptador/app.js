var inpEncriptador = document.querySelector("#encriptador");
var inpDesencriptador = document.querySelector("#desencriptador");
var outEncriptador = document.querySelector("#outEncriptador");
var outDesencriptador = document.querySelector("#outDesencriptador");
inpEncriptador.addEventListener("input", encriptar);
inpDesencriptador.addEventListener("input", desencriptar);
function encriptar(e) {
    var textoOriginal = e.target.value;
    var textoEncriptado = encriptador(textoOriginal);
    outEncriptador.textContent = textoEncriptado;
}
function desencriptar(e) {
    var textoEncriptado = e.target.value;
    var textoDesencriptado = desencriptador(textoEncriptado);
    outDesencriptador.textContent = textoDesencriptado;
}
function encriptador(s) {
    var result = "";
    for (var i = 0; i < s.length; i++) {
        var ascii = s[i].charCodeAt(0);
        ascii += 1;
        result += String.fromCharCode(ascii);
    }
    return result;
}
function desencriptador(s) {
    var result = "";
    for (var i = 0; i < s.length; i++) {
        var ascii = s[i].charCodeAt(0);
        ascii -= 1;
        result += String.fromCharCode(ascii);
    }
    return result;
}
