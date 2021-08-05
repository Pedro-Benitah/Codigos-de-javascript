

function taxaDeConsumo() {
    var litros = parseFloat(document.getElementById("litros").value);
    var distancia = parseFloat(document.getElementById("distancia").value);

    var taxaDeConsumo = distancia / litros;

    alert(`A taxa de consumo em L da viagem de ${distancia}km é de ${taxaDeConsumo}`);

}

