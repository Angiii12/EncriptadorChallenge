function check(text){
     for(let i = 0; i < text.length; i++){
        let char = text[i];
        if (!char.match(/[a-z\s]/)) {
            return true;
        }
    }
    return false;
}    


function encrypt(){
    let inputText= document.getElementById('inputText').value;
    if(check(inputText)==true){
        document.getElementById('error').textContent = 'ERROR: no es posible utilizar simbolos, mayusculas, acentos ni numeros';
        document.getElementById('inputText').value = ' ';
      
    } else {
        let encryptedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
        document.getElementById('outputText').textContent = encryptedText;
    }
}

function decrypt(){
    let inputText= document.getElementById('inputText').value;
    if(check(inputText)==true){
        document.getElementById('inputText').textContent = 'ERROR: no es posible utilizar simbolos, mayusculas, acentos ni numeros';
    } else {
        let decryptText = inputText
        .replace(/ai/g, 'a')
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
        document.getElementById('outputText').textContent = decryptText;
    }
}

function cleanWindow(){
    let inputField = document.getElementById('inputText');
    inputField.value = null;
    inputField.placeholder = 'Ingrese texto aqui';
    document.getElementById('error').textContent = ' ';
    document.getElementById('outputText').textContent = ' ';
    document.querySelector('.btn_cpy').textContent = ' Copiar';
}

function copyText(){
    let outputText = document.getElementById('outputText').textContent;
    navigator.clipboard.writeText(outputText);

    document.querySelector('.btn_cpy').textContent = '¡Copiado!';
}
