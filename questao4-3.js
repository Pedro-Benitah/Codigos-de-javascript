var dados;
dados = { nome: [''], nota1: [''], nota2: [''] };

var lista;
lista = [];

function receber() {
    dados.nome[0] = document.getElementById("pri").value
    dados.nota1[0] = document.getElementById("nota1pri").value
    dados.nota2[0] = document.getElementById("nota2pri").value

    dados.nome[1] = document.getElementById("seg").value
    dados.nota1[1] = document.getElementById("nota1seg").value
    dados.nota2[1] = document.getElementById("nota2seg").value

    dados.nome[2] = document.getElementById("ter").value
    dados.nota1[2] = document.getElementById("nota1ter").value
    dados.nota2[2] = document.getElementById("nota2ter").value

    dados.nome[3] = document.getElementById("qua").value
    dados.nota1[3] = document.getElementById("nota1qua").value
    dados.nota2[3] = document.getElementById("nota2qua").value

    dados.nome[4] = document.getElementById("qui").value
    dados.nota1[4] = document.getElementById("nota1qui").value
    dados.nota2[4] = document.getElementById("nota2qui").value

    dados.nome[5] = document.getElementById("sex").value
    dados.nota1[5] = document.getElementById("nota1sex").value
    dados.nota2[5] = document.getElementById("nota2sex").value

    dados.nome[6] = document.getElementById("set").value
    dados.nota1[6] = document.getElementById("nota1set").value
    dados.nota2[6] = document.getElementById("nota2set").value

    dados.nome[7] = document.getElementById("oit").value
    dados.nota1[7] = document.getElementById("nota1oit").value
    dados.nota2[7] = document.getElementById("nota2oit").value

    dados.nome[8] = document.getElementById("non").value
    dados.nota1[8] = document.getElementById("nota1non").value
    dados.nota2[8] = document.getElementById("nota2non").value

    dados.nome[9] = document.getElementById("dec").value
    dados.nota1[9] = document.getElementById("nota1dec").value
    dados.nota2[9] = document.getElementById("nota2dec").value
    var soma; //soma das notas do aluno
    var media; //media por aluno
    var somaGeral; //soma das medias de tds os alunos
    var mediaGeral; //divide a soma das medias pelo numero de alunos contados pelo if
    media = [];
    somaGeral = 0;
    var alunocount = 0; //conta os alunos dentro do for
    for (var i = 0; i < 10; i++) {
        if (dados.nota1[i] != '') {
            soma = (dados.nota1[i] / 1 + dados.nota2[i] / 1)
            media.push(soma / 2)
            alert("media: " + media)//eu sei q n pode alert, so tava testando

            somaGeral += soma;
            alunocount++; //ve qts aluno ja contaram                 
        }//retorna a media de cada aluno
    }
    //alert("soma geral: "+ somaGeral);
    mediaGeral = ((somaGeral / alunocount)/2); //divide pelos alunos ja contados
    alert("media geral= " + mediaGeral);
    var acima;
    acima = "";
    for (var j = 0; j < 10; j++) {
        if (media[j] >= mediaGeral && dados.nome[j] != '') {
            acima += `${dados.nome[j]}, `;
        }
    } document.getElementById("retorno").innerHTML = `Alunos acima da mÃ©dia: ${acima}`
}
