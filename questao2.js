

function quantiaEmReais() {
    var quantiaEmDolares = parseFloat(document.getElementById("quantiaEmDolares").value);
    var cotacaoDoDolar = parseFloat(document.getElementById("cotacaoDoDolar").value);

    var real = quantiaEmDolares * cotacaoDoDolar;

    alert(`Hoje, $${quantiaEmDolares} é igual a: R$${real}`);



}

