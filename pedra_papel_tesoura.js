function jogar() {

    var jogador = document.getElementById("jogo").value
    var CPU = parseInt(Math.random()*(4-1)+1)
    var abreviacao
    var resultado

    jogador = jogador.toUpperCase()

    abreviacao = jogador[0] + jogador[1]

    if (abreviacao == "PE") {

        abreviacao = 1

    } else if (abreviacao == "PA") {

        abreviacao = 2

    } else if (abreviacao == "TE") {

        abreviacao = 3

    }

    if (abreviacao == 1 && CPU == 3) {
        
        resultado = "PARABENS, VOCE GANHOU!!!"

        CPU = "TESOURA"

    } else if (abreviacao == 1 && CPU == 2) {

        resultado = "voce perdeu..."

        CPU = "PAPEL"
        
    } else if (abreviacao == 2 && CPU == 1) {

        resultado = "PARABENS, VOCE GANHOU!!!"

        CPU = "PEDRA"

    } else if (abreviacao == 2 && CPU == 3) {

        resultado = "voce perdeu..."

        CPU = "TESOURA"

    } else if (abreviacao == 3 && CPU == 2) {

        resultado = "PARABENS, VOCE GANHOU!!!"

        CPU = "PAPEL"
        
    } else if (abreviacao == 3 && CPU == 1) {

        resultado = "voce perdeu..."

        CPU = "PEDRA"

    } else if (abreviacao == CPU) {

        resultado = "EMPATE"

        CPU = jogador

    } else {

        resultado = "O valor inserido eh invalido..."

    }

    if (resultado == "O valor inserido eh invalido...") {

    document.getElementById("resposta").innerHTML = 

    `
    Resultado: ${resultado}
    `
    }else {

    document.getElementById("resposta").innerHTML = 

    `
    Resultado: 
    <br>
    <br>
    Voce jogou: ${jogador}
    <br>
    <br>
    O computador jogou: ${CPU}
    <br>
    <br>
    Resultado: ${resultado}
    `
    }
}