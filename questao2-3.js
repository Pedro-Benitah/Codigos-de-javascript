//style="border: 1px solid black;"

var m;
var i;
var j;

m = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
var mostrar = "";
mostrar += `<table style="border: 1px solid black;">`;
for (i = 0; i < m.length; i++) {
    mostrar += `<tr style="border: 1px solid black;">`
    for (j = 0; j < m[i].length; j++) {
        mostrar += `<td style="border: 1px solid black;">${m[i][j]}</td>`;
    }
    mostrar += `</tr>`;
    
}
mostrar += `</table>`;

document.getElementById("matriz").innerHTML = mostrar;



document.getElementById("menu").innerHTML = `
<table>
    <tr>
        <td><button onclick="imprimir_media_coluna()">Imprimir média (coluna)</button></td>
        <td><button onclick="troca_val()">Trocar valor</button></td>  
    </tr>
    <tr>
        <td><button onclick="imprimir_media_linha()">Imprimir média (linha)</button></td>
        <td><button onclick="troca_pos()">Trocar posição</button></td>
    </tr>
</table>
`

//1 - trocar qualquer valores presente na matriz

function troca_val() {
    document.getElementById("menu").innerHTML = `
    Digite a linha, a coluna e o novo valor que você deseja trocar: 
    <br>
    <input type="number" id="linha" placeholder="linha" max="3"/>
    <br>
    <input type="number" id="coluna" placeholder="coluna" max="3"/>
    <br>
    <input type="number" id="valor" placeholder="valor"/>
    <br>
    <button onclick="trocar1()">Trocar</button>
    `
}


function trocar1() {
    linha = parseInt(document.getElementById("linha").value) // informada pelo usuario
    coluna = parseInt(document.getElementById("coluna").value) // informada pelo usuario

    if (linha - 1 <= 2 && linha - 1 >= 0 && coluna - 1 <= 2 && coluna - 1 >= 0) {
        m[linha-1][coluna-1] = parseInt(document.getElementById("valor").value) //informado pelo usuario
        var mostrar = "";
        mostrar += `<table style="border: 1px solid black;">`;
        for (i = 0; i < m.length; i++) {
            mostrar += `<tr style="border: 1px solid black;">`
            for (j = 0; j < m[i].length; j++) {
                mostrar += `<td style="border: 1px solid black;">${m[i][j]}</td>`;
            }
            mostrar += `</tr>`;
        }
        mostrar += `</table>`;

        document.getElementById("matriz").innerHTML = mostrar;
        document.getElementById("menu").innerHTML = `
    <table>
        <tr>
            <td><button onclick="imprimir_media_coluna()">Imprimir média (coluna)</button></td>
            <td><button onclick="troca_val()">Trocar valor</button></td>  
        </tr>
        <tr>
            <td><button onclick="imprimir_media_linha()">Imprimir média (linha)</button></td>
            <td><button onclick="troca_pos()">Trocar posição</button></td>
        </tr>
    </table>
    `
    }
    else {
        document.getElementById("erro").innerHTML = 'Valores de linha ou coluna inválidos.'
    }
}


function troca_pos() {
    document.getElementById("menu").innerHTML = `
        Digite os valores de linha e coluna que você deseja trocar: 
        <br>
        <input type="number" id="linha1" placeholder="linha" max="3"/>
        <br>
        <input type="number" id="coluna1" placeholder="coluna" max="3"/>
        <br>
        Digite os novos valores para linha e para coluna: 
        <br>
        <input type="number" id="linha2" placeholder="linha" max="3"/>
        <br>
        <input type="number" id="coluna2" placeholder="coluna" max="3"/>
        <br>
        <button onclick="trocar2()">Trocar</button>
        `
}

function trocar2() {

    var linha1 = document.getElementById("linha1").value // informada pelo usuario
    var coluna1 = document.getElementById("coluna1").value // informada pelo usuario
    var linha2 = document.getElementById("linha2").value // informada pelo usuario
    var coluna2 = document.getElementById("coluna2").value // informada pelo ususuario

    if (linha1 - 1 <= 2 && linha1 - 1 >= 0 && coluna1 - 1 <= 2 && coluna1 - 1 >= 0 && linha2 - 1 <= 2 && linha2 - 1 >= 0 && coluna2 - 1 <= 2 && coluna2 - 1 >= 0) {
        var aux;
        aux = m[linha1 - 1][coluna1 - 1];
        m[linha1 - 1][coluna1 - 1] = m[linha2 - 1][coluna2 - 1];
        m[linha2 - 1][coluna2 - 1] = aux;
        var mostrar = "";
        mostrar += `<table style="border: 1px solid black;">`;
        for (i = 0; i < m.length; i++) {
            mostrar += `<tr style="border: 1px solid black;">`
            for (j = 0; j < m[i].length; j++) {
                mostrar += `<td style="border: 1px solid black;">${m[i][j]}</td>`;
            }
            mostrar += `</tr>`;
        }
        mostrar += `</table>`;

        document.getElementById("matriz").innerHTML = mostrar;
        document.getElementById("menu").innerHTML = `
    <table>
        <tr>
            <td><button onclick="imprimir_media_coluna()">Imprimir média (coluna)</button></td>
            <td><button onclick="troca_val()">Trocar valor</button></td>  
        </tr>
        <tr>
            <td><button onclick="imprimir_media_linha()">Imprimir média (linha)</button></td>
            <td><button onclick="troca_pos()">Trocar posição</button></td>
        </tr>
    </table>
    `
    }
    else {
        document.getElementById().innerHTML = 'Valores de linha ou coluna inválidos.'
    }

}


function imprimir_media_linha() {

var l1;
var l2;
var l3;

//linha1
l1 = (m[0][0] + m[0][1] + m[0][2]) / 3

//linha2
l2 = (m[1][0] + m[1][1] + m[1][2]) / 3

//linha3
l3 = (m[2][0] + m[2][1] + m[2][2]) / 3

document.getElementById("erro").innerHTML = `Média por linha:
<br>
1ª linha: ${l1}
<br>
2ª linha: ${l2}
<br>
3ª linha: ${l3}`
}

function imprimir_media_coluna() {
    //4- imprimir a média de cada coluna da matriz

    var c1;
    var c2;
    var c3;

//coluna1
c1 = (m[0][0] + m[1][0] + m[2][0]) / 3

//coluna2
c2 = (m[0][1] + m[1][1] + m[2][1]) / 3

//coluna3
c3 = (m[0][2] + m[1][2] + m[2][2]) / 3

document.getElementById("erro").innerHTML = `Média por coluna:
<br>
1ª coluna: ${c1}
<br>
2ª coluna: ${c2}
<br>
3ª coluna: ${c3}`
}