function Somar(){

    let value1 = document.getElementById('n1').value
    let metros = parseFloat(value1)/100

    document.getElementById('resposta'). innerHTML = metros + ' Metros'
}