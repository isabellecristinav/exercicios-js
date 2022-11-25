function Numero(){
    let n1 = document.getElementById('numero1').value

    if(parseInt(n1) >= 1){
        document.getElementById('resultado').innerHTML = "O número é positivo" 
    }else{
        document.getElementById('resultado').innerHTML = "O número é negativo" 
    }
    //limpar campo
    document.getElementById('numero1').value
}