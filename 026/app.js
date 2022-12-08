function Turno() {
    let turno = document.getElementById('turno').value
    if (turno == 'm') {
        document.getElementById('resultado').innerHTML = 'Bom Dia!'
    } else if (turno== 'v') {
        document.getElementById('resultado').innerHTML = 'Boa Tarde!'
    } else {
        document.getElementById('resultado').innerHTML = 'Boa Noite!'
    }
}