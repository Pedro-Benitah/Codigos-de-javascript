var valores;
var meses;

meses = [];

meses = ["Valores", "", "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"];

valores = [
    [],
    [],
    []
];

function tabelar() {
    for (var i=0; i<3; i++) {
        for(var j=0; j<6; j++) {
            valores[i][j] = parseFloat(Math.random() * 1000).toFixed(2);
        }
    }
    document.getElementById("confirma"). innerHTML = "<i>Tabela gerada com sucesso.<i>";
}

function mostrar() {
    var resposta; //são as respostas no html
    var total_vendas; //pega o número total das vendas (valor)
    var melhor_vendedor; //pega entre os 3 vendedores, quem teve a maior quantidade de vendas
    var auxiliar_vendedor; //serve para manter o maior valor vendido
    var auxiliar; //serve para as operações com o vendedor
    var auxiliar_venda; //serve para manter o maior valor dentre os meses
    var auxiliar2; //serve para as operações com meses
    var mes; //serve para pegar o mes com mais vendas
    var media_vendedor; //serve para pegar as médias de cada vendedor
    var media_mes; //serve para pegar as médias de cada mes

    media_mes = "";
    media_vendedor = "";
    auxiliar2 = 0;
    auxiliar_venda = 0;
    auxiliar_vendedor = 0;
    auxiliar = 0;
    total_vendas = 0;
    resposta = `Tabela: <br><table style="border: 1px solid black;">`;
    resposta += `<tr style="border: 1px solid black;">`;
    for (var i=0; i<8; i++) {
        resposta += `<td style="border: 1px solid black;">${meses[i]}</td>`;
    }
    resposta += "</tr>";
    for (var i=0; i<3; i++) {
        resposta += `<tr style="border: 1px solid black;">`;
        resposta += `<td style="border: 1px solid black;">vendedor ${i+1}<td>`;
        for(var j=0; j<6; j++) {
            resposta += `<td style="border: 1px solid black;">${valores[i][j]}</td>`;
        }
        resposta += "</tr>";
    }
    resposta += "</table>";
    for (var i=0; i<3; i++) {
        auxiliar = 0;
        for(var j=0; j<6; j++) {
            total_vendas += parseFloat(valores[i][j]);
            auxiliar += parseFloat(valores[i][j]);
            auxiliar2 = 0;
            for(var z=0; z<3; z++) {
                auxiliar2 += parseFloat(valores[z][j]);
                if(auxiliar_venda < auxiliar2) {
                    auxiliar_venda = auxiliar2;
                    mes = meses[j+2];
                }
            }
        }
        if(auxiliar_vendedor < auxiliar) {
            auxiliar_vendedor = auxiliar;
            melhor_vendedor = `Vendedor ${i+1}`;
        }  
    }
    media_vendedor += `<table style="border: 1px solid black;">`;
    for (var i=0; i<3; i++) {
        auxiliar = 0;
        for(var j=0; j<6; j++) {
            auxiliar += parseFloat(valores[i][j]);
        }
        media_vendedor += `<tr style="border: 1px solid black;">`;
        media_vendedor += `<td style="border: 1px solid black;">Vendedor ${i+1}:</td><td style="border: 1px solid black;">${(auxiliar/6).toFixed(2)}</td>`;
        media_vendedor += `</tr>`;
    }
    media_vendedor += "</table>";
    media_mes += `<table style="border: 1px solid black;">`;
    for(var j=0; j<6; j++) {
        auxiliar2 = 0;
        for(var z=0; z<3; z++) {
            auxiliar2 += parseFloat(valores[z][j]);
        }
        media_mes += `<tr style="border: 1px solid black;">`;
        media_mes += `<td style="border: 1px solid black;">${meses[j+2]}:</td><td style="border: 1px solid black;">${(auxiliar2/3).toFixed(2)}</td>`;
        media_mes += `</tr>`;
    }
    total_vendas = total_vendas.toFixed(2);
    media_mes += "</table>";
    resposta += `<br>Total geral de vendas: ${total_vendas}`;
    resposta += `<br>Vendedor que vendeu mais: ${melhor_vendedor}`;
    resposta += `<br>Mês que a loja mais vendeu: ${mes}`;
    resposta += `<br>Média de vendas por vendedor: ${media_vendedor}`;
    resposta += `<br>Média de vendas por mês: ${media_mes}`;
    document.getElementById("resposta").innerHTML = resposta;
}

//style="border: 1px solid black;"