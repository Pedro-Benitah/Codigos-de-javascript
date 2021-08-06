function verificar() {

var x = parseFloat(document.getElementById("Valorx()").value);
var y = parseFloat(document.getElementById("Valory()").value);
var resp = document.getElementById("resposta()").innerText;

if (x > y) {

    document.getElementById("resposta()").innerText = "Resposta: x eh maior que y";

} else if (x < y) {

    document.getElementById("resposta()").innerText = "Resposta: y eh maior que x";

    } else {

        document.getElementById("resposta()").innerText = "Resposta: x eh igual a y";

    }
}