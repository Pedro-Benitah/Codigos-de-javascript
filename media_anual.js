function calcular() {

    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var media = (nota1 + nota2) / 2;
    
    document.getElementById("media").innerText = `Sua média é: ${media}`;

    if (media >= 7) {

        document.getElementById("resultado").innerText = "Sua situação é: APROVADO" ;

    }else if (media > 4 && media < 7) {

        document.getElementById("resultado").innerText = "Sua situação é: RECUPERACAO";

    }else if (media <= 4) {

        document.getElementById("resultado").innerText = "Sua situação é: REPROVADO";

    }else {

        alert("Valor inserido não aceito");

    }

}