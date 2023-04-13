
function encriptarTexto(texto) {
    let textoEncriptado = '';
    for(let i = 0; i < texto.length; i++) {
      switch(texto[i]) {
        case 'e':
          textoEncriptado += 'enter';
          break;
        case 'i':
          textoEncriptado += 'imes';
          break;
        case 'a':
          textoEncriptado += 'ai';
          break;
        case 'o':
          textoEncriptado += 'ober';
          break;
        case 'u':
          textoEncriptado += 'ufat';
          break;
        default:
          textoEncriptado += texto[i];
      }
    }
    return textoEncriptado;
  }
function desencriptarTexto(textoEncriptado) {
    let textoDesencriptado = '';
    let i = 0;
    while (i < textoEncriptado.length) {
      if (textoEncriptado.slice(i, i + 5) === 'enter') {
        textoDesencriptado += 'e';
        i += 5;
      } else if (textoEncriptado.slice(i, i + 4) === 'imes') {
        textoDesencriptado += 'i';
        i += 4;
      } else if (textoEncriptado.slice(i, i + 2) === 'ai') {
        textoDesencriptado += 'a';
        i += 2;
      } else if (textoEncriptado.slice(i, i + 4) === 'ober') {
        textoDesencriptado += 'o';
        i += 4;
      } else if (textoEncriptado.slice(i, i + 4) === 'ufat') {
        textoDesencriptado += 'u';
        i += 4;
      } else {
        textoDesencriptado += textoEncriptado[i];
        i++;
      }
    }
    return textoDesencriptado;
  }
 
  var buttonEncriptar = document.querySelector("#encriptar")
  var buttonDesencriptar = document.querySelector("#desencriptar")
  let contenido = document.getElementById("content")
  let texto = document.querySelector("#input")
  let textoEncriptado = ""

    buttonEncriptar.onclick = () => {
        textoEncriptado = contenido.innerHTML= encriptarTexto(texto.value);
        return textoEncriptado 
    }

    buttonDesencriptar.onclick = () =>{
        textoDes = contenido.innerHTML= desencriptarTexto(textoEncriptado);
        return textoDes
    }

// boton copiar 
const botonCopiar = document.getElementById('copiar');
botonCopiar.addEventListener('click', () => {
  const textoACopiar = contenido.value;
  navigator.clipboard.writeText(textoACopiar).then(() => {
    alert('Texto copiado al portapapeles');
  }, (error) => {
    alert('Error al copiar el texto: ', error);
  });
});





