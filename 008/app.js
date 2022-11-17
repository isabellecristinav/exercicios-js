function Operacao(){
    let n1 = document.getElementById('valor1').value
    let n2 = document.getElementById('valor2').value

    document.getElementById('respostas').innerHTML = parseFloat(n1) + parseFloat(n2)
    document.getElementById('respostas2').innerHTML = parseFloat(n1) - parseFloat(n2)
    document.getElementById('respostas3').innerHTML = parseFloat(n1) * parseFloat(n2)
    document.getElementById('respostas4').innerHTML = parseFloat(n1) / parseFloat(n2)
}