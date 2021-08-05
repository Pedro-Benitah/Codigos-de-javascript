function numero() {

    var x;
    var unidade;
    var dezena;
    var centena;

    x = document.getElementById("numero").value;

    if (x == "") {

        alert("Nenhum valor foi inserido.");

    } if (parseInt(x) < 0 || parseInt(x) > 1000) {

        alert("O valor fornecido a x nao eh aceito.");

    } else if (parseInt(x) == 0) {

        alert(`${x} eh igual a zero.`);

    } else {

        if (x[x.length - 1] == "1") {

            unidade = "um";

        } else if (x[x.length - 1] == "2") {

            unidade = "dois";

        } else if (x[x.length - 1] == "3") {

            unidade = "tres";

        } else if (x[x.length - 1] == "4") {

            unidade = "quatro";

        } else if (x[x.length - 1] == "5") {

            unidade = "cinco";

        } else if (x[x.length - 1] == "6") {

            unidade = "seis";

        } else if (x[x.length - 1] == "7") {

            unidade = "sete";

        } else if (x[x.length - 1] == "8") {

            unidade = "oito";

        } else if (x[x.length - 1] == "9") {

            unidade = "nove";

        } else if (x[x.length - 1] == "0") {

            unidade = "";

        } if (x[x.length - 2] == "2") {

            dezena = "vinte";

        } else if (x[x.length - 2] == "3") {

            dezena = "trinta";

        } else if (x[x.length - 2] == "4") {

            dezena = "quarenta";

        } else if (x[x.length - 2] == "5") {

            dezena = "cinquenta";

        } else if (x[x.length - 2] == "6") {

            dezena = "sessenta";

        } else if (x[x.length - 2] == "7") {

            dezena = "setenta";

        } else if (x[x.length - 2] == "8") {

            dezena = "oitenta";

        } else if (x[x.length - 2] == "9") {

            dezena = "noventa";

        } else if (x[x.length - 2] == "0") {

            dezena = "";

        } if (x[x.length - 2] + x[x.length - 1] == "10") {

            dezena = "dez";
            unidade = "";

        } else if (x[x.length - 2] + x[x.length - 1] == "11") {

            dezena = "onze";
            unidade = "";

        } else if (x[x.length - 2] + x[x.length - 1] == "12") {

            dezena = "doze";
            unidade = "";

        } else if (x[x.length - 2] + x[x.length - 1] == "13") {

            dezena = "treze";
            unidade = "";

        } else if (x[x.length - 2] + x[x.length - 1] == "14") {

            dezena = "quatorze";
            unidade = "";

        } else if (x[x.length - 2] + x[x.length - 1] == "15") {

            dezena = "quinze";
            unidade = "";

        } else if (x[x.length - 2] + x[x.length - 1] == "16") {

            dezena = "dezesseis";
            unidade = "";

        } else if (x[x.length - 2] + x[x.length - 1] == "17") {

            dezena = "dezessete";
            unidade = "";

        } else if (x[x.length - 2] + x[x.length - 1] == "18") {

            dezena = "dezoito";
            unidade = "";

        } else if (x[x.length - 2] + x[x.length - 1] == "19") {

            dezena = "dezenove";
            unidade = "";

        } if (x == "100") {

            alert(`${x} eh igual a cem.`);

        } else {

            if (x[x.length - 3] == "1") {

                centena = "cento";

            } else if (x[x.length - 3] == "2") {

                centena = "duzentos";

            } else if (x[x.length - 3] == "3") {

                centena = "trezentos";

            } else if (x[x.length - 3] == "4") {

                centena = "quatrocentos";

            } else if (x[x.length - 3] == "5") {

                centena = "quinhentos";

            } else if (x[x.length - 3] == "6") {

                centena = "seiscentos";

            } else if (x[x.length - 3] == "7") {

                centena = "setecentos";

            } else if (x[x.length - 3] == "8") {

                centena = "oitocentos";

            } else if (x[x.length - 3] == "9") {

                centena = "novecentos";

            } if (x == "1000") {

                alert(`${x} eh igual a mil`);

            }
        } if (x.length == 3 && x != "100" && x != "000" && x[x.length - 3] != "0") {

            if (x[x.length - 2] != "0") {

                dezena = ` e ${dezena}`;

            } if (x[x.length - 1] != "0" && x[x.length - 2] != "1") {

                unidade = ` e ${unidade}`;

            } alert(`${x} eh igual a ${centena + dezena + unidade}.`);

        } else if (x.length == 2 && x != "00") {

            if (x[x.length - 1] != "0" && x[x.length - 2] != "1") {

                unidade = ` e ${unidade}`;

            } alert(`${x} eh igual a ${dezena + unidade}.`);

        } if (x.length == 1 && x != "0") {

            alert(`${x} eh igual a ${unidade}.`);

        }
    }
}
