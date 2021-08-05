function impar() {

    var mao_do_cpu = Math.round(Math.random(5)*5);
    var mao_do_humano = parseInt(document.getElementById("mao_do_humano").value);
    var aposta_do_cpu;
    var aposta_do_humano = "impar";
    var jogo;
    var resultado;
    var resposta;

    if (mao_do_humano <= 5 && mao_do_humano >= 0) {

        if (aposta_do_humano == "impar") {

            aposta_do_cpu = "par";

        } else if (aposta_do_humano == "par") {

            aposta_do_cpu = "impar";

        }

        jogo = (mao_do_humano + mao_do_cpu);

        resultado = jogo % 2;

        if (resultado == 1) {

            resultado = "impar";

        } else if (resultado == 0) {

            resultado = "par";

        }

        if (resultado == aposta_do_humano) {

            resposta = "PARABENS, VOCE GANHOU!!!";

        } else {

            resposta = "voce perdeu...";

        }

        document.getElementById("resposta").innerHTML =

            `Resultado: 
<br>
<br>
Sua mao: ${mao_do_humano}
<br>
<br>
Mao do CPU: ${mao_do_cpu}
<br>
<br>
Total: ${jogo}
<br>
<br>
Voce escolheu: ${aposta_do_humano}
<br>
<br>
O CPU escolheu: ${aposta_do_cpu}
<br>
<br>
Resultado do jogo: ${resultado}
<br>
<br>
${resposta}
`
    } else {

        alert("o valor inserido nao eh valido!");

    }
}

function par() {

    var mao_do_cpu = Math.round(Math.random(5)*5);
    var mao_do_humano = parseInt(document.getElementById("mao_do_humano").value);
    var aposta_do_cpu;
    var aposta_do_humano = "par";
    var jogo;
    var resposta;

    if (mao_do_humano <= 5 && mao_do_humano >= 0) {

        if (aposta_do_humano == "impar") {

            aposta_do_cpu = "par";

        } else if (aposta_do_humano == "par") {

            aposta_do_cpu = "impar";

        }

        jogo = (mao_do_humano + mao_do_cpu);

        resultado = jogo % 2;

        if (resultado == 1) {

            resultado = "impar";

        } else if (resultado == 0) {

            resultado = "par";

        }

        if (resultado == aposta_do_humano) {

            resposta = "PARABENS, VOCE GANHOU!!!";

        } else {

            resposta = "voce perdeu...";

        }

        document.getElementById("resposta").innerHTML =

            `Resultado: 
<br>
<br>
Sua mao: ${mao_do_humano}
<br>
<br>
Mao do CPU: ${mao_do_cpu}
<br>
<br>
Total: ${jogo}
<br>
<br>
Voce escolheu: ${aposta_do_humano}
<br>
<br>
O CPU escolheu: ${aposta_do_cpu}
<br>
<br>
Resultado do jogo: ${resultado}
<br>
<br>
${resposta}
`
    } else {

        alert("o valor inserido nao eh valido!");

    }
}