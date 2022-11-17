function Salario(){

    let value1 = document.getElementById('n1').value
    let value2 = document.getElementById('n2').value
    let salario = parseFloat(value1) * parseFloat(value2)

    document.getElementById('salario').innerHTML = 'Seu Salário é R$' + salario + ' no Mês'
}