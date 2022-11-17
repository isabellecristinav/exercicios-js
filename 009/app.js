function saudacao() {
    let nome = document.getElementById('nome').value
    let sobrenome = document.getElementById('sobrenome').value

    document.getElementById('Olá').innerHTML = 'Olá' + ' ' + nome + ' ' + sobrenome
}