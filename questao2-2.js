var resposta = document.getElementById("resp");

function somar() {
    var x = parseInt(document.getElementById("x").value);
    var y = parseInt(document.getElementById("y").value);
    var resp = x+y;

    resposta.innerHTML = `soma: ${resp}`;
    document.getElementById("x").value = resp;
    document.getElementById("y").value = ""
}
function subtrair() {
    var x = parseInt(document.getElementById("x").value);
    var y = parseInt(document.getElementById("y").value);
    var resp = x-y;

    resposta.innerHTML = `subtração: ${resp}`;
    document.getElementById("x").value = resp;
    document.getElementById("y").value = ""
}
function multiplicar() {
    var x = parseInt(document.getElementById("x").value);
    var y = parseInt(document.getElementById("y").value);
    var resp = x*y;

    resposta.innerHTML = `Multiplicação: ${resp}`;
    document.getElementById("x").value = resp;
    document.getElementById("y").value = ""
}
function dividir() {
    var x = parseInt(document.getElementById("x").value);
    var y = parseInt(document.getElementById("y").value);
    var resp = x/y;

    resposta.innerHTML = `Divisão: ${resp}`;
    document.getElementById("x").value = resp;
    document.getElementById("y").value = ""
}
function raiz() {
    var x = parseInt(document.getElementById("x").value);
    var y = parseInt(document.getElementById("y").value);
    var resp = Math.sqrt(x);

    resposta.innerHTML = `Raiz quadrada: ${resp}`;
    document.getElementById("x").value = resp;
    document.getElementById("y").value = ""
}
function elevar() {
    var x = parseInt(document.getElementById("x").value);
    var y = parseInt(document.getElementById("y").value);
    var resp = Math.pow(x, y);

    resposta.innerHTML = `Potencia: ${resp}`;
    document.getElementById("x").value = resp;
    document.getElementById("y").value = ""
}