function MaiorNumero() {
    let n1 = document.getElementById('n1').value
    let n2 = document.getElementById('n2').value
    let n3 = document.getElementById('n3').value

    if (n1 > n2 && n1 > n3 && n2 < n3) {
        document.getElementById('mostrar').innerHTML = 'O Maior Número é ' + n1 + ' e o Menor é ' + n2

    }

    if (n1 > n2 && n1 > n3 && n3 < n2) {

        document.getElementById('mostrar').innerHTML = 'O Maior Número é ' + n1 + ' e o Menor é ' + n3

    }

    else if (n2 > n1 && n2 > n3 && n1 < n3) {

        document.getElementById('mostrar').innerHTML = 'O Maior Número é ' + n2 + ' e o Menor é ' + n1

    }

    else if (n2 > n1 && n2 > n3 && n3 < n1) {

        document.getElementById('mostrar').innerHTML = 'O Maior Número é ' + n2 + ' e o Menor é ' + n3

    }

    else if (n3 > n1 && n3 > n2 && n1 < n2) {

        document.getElementById('mostrar').innerHTML = 'O Maior Número é ' + n3 + ' e o Menor é ' + n1

    }

    else {

        document.getElementById('mostrar').innerHTML = 'O Maior Número é ' + n3 + ' e o Menor é ' + n2

    }
}
