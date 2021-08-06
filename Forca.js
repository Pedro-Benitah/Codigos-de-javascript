//TA UMA BAGUNÇA EU SEI ME PERDOE
var paises = ["brasil", "alemanha", "estados unidos", "belgica"];
var sorteioPalavra = parseInt(Math.random() * paises.length);
var palavra = paises[sorteioPalavra];
var tamPalavra = palavra.length;
var letras = [];
var letrasRestantes;
var usados = [];
var j;
var k;

usados[0] = ""

j=-1;

function sortearPalavra() {
    var i;

    document.getElementById("palavra").innerText = "";
    document.getElementById("qntdLetras").innerText = `A sua palavra tem ${tamPalavra} letras`;
    for (i = 0; i < tamPalavra; i++) {
        letras[i] = "?";
        document.getElementById("palavra").innerText += letras[i];
    }
    letrasRestantes = tamPalavra;
}

function forca() {
    var letraUsuario = document.getElementById("letra").value;
    var boneco = ["o <br>", "[", "|", "] <br>", "{", "} "];

    letraUsuario=letraUsuario.toLowerCase();

    while (letrasRestantes > 0) {
        k=0
        for (i = 0; i < tamPalavra; i++) {

            if (letraUsuario == palavra[i] && letraUsuario != letras[i]) {
                letras[i] = letraUsuario;
                document.getElementById("palavra").innerText = letras;
                letrasRestantes--;
                if (letrasRestantes == 0) { //HAHA NAO SEI
                    document.write("<h1>PARABÉNS, VOCÊ GANHOU!!!</h1>");
                    break;
                }
            }
            if(letraUsuario != letras[i] && letraUsuario != palavra[i] && letraUsuario != usados[i] && usados[i] != palavra[i]) {
                k++;
                if(k==palavra.length){
                    j++;
                    document.getElementById("avisos").innerHTML += boneco[j];
                    if(j==5){
                        document.write(`
                            <h1>Você perdeu...</h1>
                            __________
                            <br>
                            |--------------|
                            <br>
                            |-------------O
                            <br>
                            |-------------[|]
                            <br>
                            |-------------{} 
                            <br>
                            -
                        `);
                    }
                    break;
                }
            }
        }
        break;
    }
    for (i = 0; i < tamPalavra; i++) {
        if(palavra[i] == " " && letras[i] != " "){
            letras[i] = " ";
            letrasRestantes--;
        }
    }
    usados.push(letraUsuario); // bota no html as letras já utilizadas
    document.getElementById("usados").innerHTML += letraUsuario + ", ";
    document.getElementById("letra").value = ""  ;
} 
