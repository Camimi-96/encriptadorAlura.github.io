const textarea = document.querySelector(".area-texto");
// con esto almaceno lo que el usuario ingresa en el recuadro
const mensaje = document.querySelector(".mensaje");
const copiar = document.querySelector(".btmCopiar")

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btmEncriptar(){
    const textoEncriptado = encriptar(textarea.value);
    mensaje.value = textoEncriptado;
    textarea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptado){

    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]]
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

return stringEncriptado
}

function btmDesencriptar(){
    const textoEncriptado = desencriptar(textarea.value);
    mensaje.value = textoEncriptado;
    textarea.value = "";
}

function desencriptar(stringDesencriptado){

    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]]
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }

return stringDesencriptado
}


