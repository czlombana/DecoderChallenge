const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const especiales = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\u00C0-\u017F]+/.test(inputTexto.value);
        
    if (especiales == true){
        mensaje.value = "El texto no puede contener tildes o caracteres especiales";
    } else {
            const textoEncriptado = encriptar(inputTexto.value);
            mensaje.value = textoEncriptado;
            mensaje.style.backgroundImage = "none";
            inputTexto.value = "";
    } 
}

function encriptar(stringEncripta) {
    let matrizCadena = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    
    stringEncripta = stringEncripta.toLowerCase();

    for (let idx = 0; idx < matrizCadena.length; idx++){
        if (stringEncripta.includes(matrizCadena[idx][0])){
            stringEncripta = stringEncripta.replaceAll(matrizCadena[idx][0], matrizCadena[idx][1]);
        }
    }
    return stringEncripta;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(inputTexto.value);
    mensaje.value = textoDesencriptado;
    inputTexto.value = "";
}

function desencriptar(stringDesencripta) {
    let matrizCadena = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringDesencripta = stringDesencripta.toLowerCase();

    for (let idx = 0; idx < matrizCadena.length; idx++) {
        if (stringDesencripta.includes(matrizCadena[idx][1])) {
            stringDesencripta = stringDesencripta.replaceAll(matrizCadena[idx][1], matrizCadena[idx][0]);
        }
    }
    return stringDesencripta;
}

function btnCopiar() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alert("Texto copiado!");
}