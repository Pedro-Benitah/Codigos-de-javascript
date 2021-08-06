/*4) Ler 10 letras do alfabeto e imprimir o percentual de vogais e de consoantes
digitadas.*/

function verificar() {

    var letra1 = (document.getElementById("letra1").value).toLowerCase()
    var letra2 = (document.getElementById("letra2").value).toLowerCase()
    var letra3 = (document.getElementById("letra3").value).toLowerCase()
    var letra4 = (document.getElementById("letra4").value).toLowerCase()
    var letra5 = (document.getElementById("letra5").value).toLowerCase()
    var letra6 = (document.getElementById("letra6").value).toLowerCase()
    var letra7 = (document.getElementById("letra7").value).toLowerCase()
    var letra8 = (document.getElementById("letra8").value).toLowerCase()
    var letra9 = (document.getElementById("letra9").value).toLowerCase()
    var letra10 = (document.getElementById("letra10").value).toLowerCase()
    var percentualvogal = 0
    var percentualconsoante

    letra1 = letra1[0]
    letra2 = letra2[0]
    letra3 = letra3[0]
    letra4 = letra4[0]
    letra5 = letra5[0]
    letra6 = letra6[0]
    letra7 = letra7[0]
    letra8 = letra8[0]
    letra9 = letra9[0]
    letra10 = letra10[0]

    if (letra1 == "a" || letra1 == "e" || letra1 == "i" || letra1 == "o" || letra1 == "u") {

        percentualvogal = percentualvogal + 1

    } if (letra2 == "a" || letra2 == "e" || letra2 == "i" || letra2 == "o" || letra2 == "u") {

        percentualvogal = percentualvogal + 1

    } if (letra3 == "a" || letra3 == "e" || letra3 == "i" || letra3 == "o" || letra3 == "u") {

        percentualvogal = percentualvogal + 1

    } if (letra4 == "a" || letra4 == "e" || letra4 == "i" || letra4 == "o" || letra4 == "u") {

        percentualvogal = percentualvogal + 1

    } if (letra5 == "a" || letra5 == "e" || letra5 == "i" || letra5 == "o" || letra5 == "u") {

        percentualvogal = percentualvogal + 1

    } if (letra6 == "a" || letra6 == "e" || letra6 == "i" || letra6 == "o" || letra6 == "u") {

        percentualvogal = percentualvogal + 1

    } if (letra7 == "a" || letra7 == "e" || letra7 == "i" || letra7 == "o" || letra7 == "u") {

        percentualvogal = percentualvogal + 1

    } if (letra8 == "a" || letra8 == "e" || letra8 == "i" || letra8 == "o" || letra8 == "u") {

        percentualvogal = percentualvogal + 1

    } if (letra9 == "a" || letra9 == "e" || letra9 == "i" || letra9 == "o" || letra9 == "u") {

        percentualvogal = percentualvogal + 1

    } if (letra10 == "a" || letra10 == "e" || letra10 == "i" || letra10 == "o" || letra10 == "u") {

        percentualvogal = percentualvogal + 1

    }

    percentualvogal = (percentualvogal/10)*100
    percentualconsoante = 100 - percentualvogal

    alert(`Dentre as 10 letras inseridas, ${percentualvogal}% sao vogais e ${percentualconsoante}% sao consoantes.`)

}