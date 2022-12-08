function preço() {
    let n1 = document.getElementById('n1').value
    let n2 = document.getElementById('n2').value
    let n3 = document.getElementById('n3').value

    if (n1 < n2 && n1 < n3) {
        document.getElementById('mostrar').innerHTML = 'Você deve comprar o produto:' + n1
    }
    else if (n2 < n1 && n2 < n3) {
        document.getElementById('mostrar').innerHTML = 'Você deve comprar o produto:' + n2
    }
    else if (n3 < n1 && n3 < n2) {
        document.getElementById('mostrar').innerHTML = 'Você deve comprar o produto:' + n3
    }
}