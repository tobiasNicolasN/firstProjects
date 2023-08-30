const inpEncriptador = document.querySelector(
  "#encriptador"
) as HTMLInputElement;
const inpDesencriptador = document.querySelector(
  "#desencriptador"
) as HTMLInputElement;
const outEncriptador = document.querySelector("#outEncriptador") as HTMLElement;
const outDesencriptador = document.querySelector(
  "#outDesencriptador"
) as HTMLElement;

inpEncriptador.addEventListener("input", encriptar);
inpDesencriptador.addEventListener("input", desencriptar);

function encriptar(e) {
  const textoOriginal = e.target.value;
  const textoEncriptado = encriptador(textoOriginal);
  outEncriptador.textContent = textoEncriptado;
}

function desencriptar(e) {
  const textoEncriptado = e.target.value;
  const textoDesencriptado = desencriptador(textoEncriptado);
  outDesencriptador.textContent = textoDesencriptado;
}

function encriptador(s: string): string {
  let result: string = "";
  for (let i = 0; i < s.length; i++) {
    let ascii: number = s[i].charCodeAt(0);
    ascii += 1;
    result += String.fromCharCode(ascii);
  }
  return result;
}

function desencriptador(s: string): string {
  let result: string = "";
  for (let i = 0; i < s.length; i++) {
    let ascii: number = s[i].charCodeAt(0);
    ascii -= 1;
    result += String.fromCharCode(ascii);
  }
  return result;
}
