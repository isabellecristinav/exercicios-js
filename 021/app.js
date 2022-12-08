function media(){
    let n1 = document.getElementById('n1').value
    let n2 = document.getElementById('n2').value
    let nota = (parseFloat(n1) + parseFloat (n2)) / 2

    if (nota == 10) {
        document.getElementById('resultado').innerHTML = "Aprovado com Distinção"
    }
    else if (nota >= 7) {
        document.getElementById('resultado').innerHTML = "Aprovado"
    }
    else {
        document.getElementById('resultado').innerHTML = "Reprovado"
    }

}