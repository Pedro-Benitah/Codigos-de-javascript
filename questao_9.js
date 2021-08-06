function jogar() {


    var IA1 = document.getElementById("IA1").value
    var IA2 = document.getElementById("IA2").value
    var maoIA1 = parseInt(Math.random()*6)
    var maoIA2 = parseInt(Math.random()*6)
    var escolhaIA1 = parseInt(Math.random()*2)
    var valescolhaIA1
    var valescolhaIA2
    var resultado
    var pontuacaoIA1 = 0
    var pontuacaoIA2 = 0
    
    IA1 = document.getElementById("IA1").value
    IA2 = document.getElementById("IA2").value

    maoIA1 = parseInt(Math.random()*6)
    maoIA2 = parseInt(Math.random()*6)

    escolhaIA1 = parseInt(Math.random()*2)    
 
    if (IA1 == "") {

        IA1 = "IA1"

    } if (IA2 == "") {

        IA2 = "IA2"

    }

    if (escolhaIA1 == 1) {

        valescolhaIA1 = "Impar"
        valescolhaIA2 = "Par"

    } else {

        valescolhaIA1 = "Par"
        valescolhaIA2 = "Impar"

    }

    resultado = (maoIA1 + maoIA2)%2

    if (escolhaIA1 == resultado) {

        pontuacaoIA1 = pontuacaoIA1 + 1

        alert(`Mao de ${IA1}: ${maoIA1}.
Escolha de ${IA1}: ${valescolhaIA1}.
Mao de ${IA2}: ${maoIA2}.
Escolha de ${IA2}: ${valescolhaIA2}.

${IA1} venceu esta rodada.

Pontos de ${IA1}: ${pontuacaoIA1}.
Pontos de ${IA2}: ${pontuacaoIA2}.
`)

    }else {

        pontuacaoIA2 = pontuacaoIA2 + 1

        alert(`Mao de ${IA1}: ${maoIA1}.
Escolha de ${IA1}: ${valescolhaIA1}.
Mao de ${IA2}: ${maoIA2}.
Escolha de ${IA2}: ${valescolhaIA2}.

${IA2} venceu esta rodada.

Pontos de ${IA1}: ${pontuacaoIA1}.
Pontos de ${IA2}: ${pontuacaoIA2}.
`)

    }

    maoIA1 = parseInt(Math.random()*6)
    maoIA2 = parseInt(Math.random()*6)

    escolhaIA1 = parseInt(Math.random()*2)    

    if (IA1 == "") {

        IA1 = "IA1"

    } if (IA2 == "") {

        IA2 = "IA2"

    }

    if (escolhaIA1 == 1) {

        valescolhaIA1 = "Impar"
        valescolhaIA2 = "Par"

    } else {

        valescolhaIA1 = "Par"
        valescolhaIA2 = "Impar"

    }

    resultado = (maoIA1 + maoIA2)%2

    if (escolhaIA1 == resultado) {

        pontuacaoIA1 = pontuacaoIA1 + 1

        alert(`Mao de ${IA1}: ${maoIA1}.
Escolha de ${IA1}: ${valescolhaIA1}.
Mao de ${IA2}: ${maoIA2}.
Escolha de ${IA2}: ${valescolhaIA2}.

${IA1} venceu esta rodada.

Pontos de ${IA1}: ${pontuacaoIA1}.
Pontos de ${IA2}: ${pontuacaoIA2}.
`)

    }else {

        pontuacaoIA2 = pontuacaoIA2 + 1

        alert(`Mao de ${IA1}: ${maoIA1}.
Escolha de ${IA1}: ${valescolhaIA1}.
Mao de ${IA2}: ${maoIA2}.
Escolha de ${IA2}: ${valescolhaIA2}.

${IA2} venceu esta rodada.

Pontos de ${IA1}: ${pontuacaoIA1}.
Pontos de ${IA2}: ${pontuacaoIA2}.
`)

    }

    maoIA1 = parseInt(Math.random()*6)
    maoIA2 = parseInt(Math.random()*6)

    escolhaIA1 = parseInt(Math.random()*2)    

    if (IA1 == "") {

        IA1 = "IA1"

    } if (IA2 == "") {

        IA2 = "IA2"

    }

    if (escolhaIA1 == 1) {

        valescolhaIA1 = "Impar"
        valescolhaIA2 = "Par"

    } else {

        valescolhaIA1 = "Par"
        valescolhaIA2 = "Impar"

    }

    resultado = (maoIA1 + maoIA2)%2

    if (escolhaIA1 == resultado) {

        pontuacaoIA1 = pontuacaoIA1 + 1

        alert(`Mao de ${IA1}: ${maoIA1}.
Escolha de ${IA1}: ${valescolhaIA1}.
Mao de ${IA2}: ${maoIA2}.
Escolha de ${IA2}: ${valescolhaIA2}.

${IA1} venceu esta rodada.

Pontos de ${IA1}: ${pontuacaoIA1}.
Pontos de ${IA2}: ${pontuacaoIA2}.
`)

    }else {

        pontuacaoIA2 = pontuacaoIA2 + 1

        alert(`Mao de ${IA1}: ${maoIA1}.
Escolha de ${IA1}: ${valescolhaIA1}.
Mao de ${IA2}: ${maoIA2}.
Escolha de ${IA2}: ${valescolhaIA2}.

${IA2} venceu esta rodada.

Pontos de ${IA1}: ${pontuacaoIA1}.
Pontos de ${IA2}: ${pontuacaoIA2}.
`)

    } if (pontuacaoIA1 > pontuacaoIA2) {

        alert(`Depois de uma lendaria batalha de par ou impar, ${IA1} VENCEU!!!`)

    }else {

        alert(`Depois de uma lendaria batalha de par ou impar, ${IA2} VENCEU!!!`)

    }

}