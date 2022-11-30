function vogal(){
    let letra = document.getElementById('letra').value

    if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {
        document.getElementById('resultado').innerHTML = 'Esta letra é uma vogal'
    }
    else {
        document.getElementById('resultado').innerHTML = 'Esta letra é uma consoante'
    }
}