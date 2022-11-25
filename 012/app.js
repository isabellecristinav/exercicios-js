function quadrado(){
    let valor1 = document.getElementById('n1').value
    let valor2 = document.getElementById('n2').value
    let valor3 = document.getElementById('n3').value
    let valor4 = document.getElementById('n4').value
    let valor5 = document.getElementById('n5').value

    document.getElementById('resposta1').innerHTML = Math.pow(valor1, 2)
    document.getElementById('resposta2').innerHTML = Math.pow(valor2, 2)
    document.getElementById('resposta3').innerHTML = Math.pow(valor3, 2)
    document.getElementById('resposta4').innerHTML = Math.pow(valor4, 2)
    document.getElementById('resposta5').innerHTML = Math.pow(valor5, 2)

}