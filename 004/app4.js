function Somar(){
    let valor1 = document.getElementById ('n1').value
    let valor2 = document.getElementById ('n2').value
    let valor3 = document.getElementById ('n3').value
    let valor4 = document.getElementById ('n4').value

    let total =  parseFloat (valor1) + parseFloat (valor2) + parseFloat (valor3) + parseFloat (valor4) 

    document.getElementById('resposta').innerHTML = total/4
}