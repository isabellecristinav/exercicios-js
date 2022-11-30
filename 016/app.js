function idade(){
    let idade = document.getElementById('idade').value

    if (idade <17){
        document.getElementById('resultado').innerHTML = 'Você é menor de idade'
    }
    else{
        document.getElementById('resultado').innerHTML = 'Você é maior de idade'
    }
}