function verificar() {

    var idade = parseInt(document.getElementById("idade").value);
    
    if (idade >= 0 && idade <= 2) {

        alert("Classificacao: Recem-nascido.");

    } else if (idade >= 3 && idade <= 11) {

        alert("Classificacao: Crianca.");

    } else if (idade >= 12 && idade <= 19) {

        alert("Classificacao: Adolescente.");

    } else if (idade >= 20 && idade <= 55) {

        alert("Classificacao: Adulto.");

    } else if (idade > 55) {

        alert("Classificacao: Idoso.");

    } else {

        alert("Valor invalido.")

    }

}

