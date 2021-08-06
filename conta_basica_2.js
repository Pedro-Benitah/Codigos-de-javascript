function resultado () {

var x = (document.getElementById("base").value);
var y = (document.getElementById("expoente").value);

var resposta = Math.pow(x, y);


    document.getElementById("resultado").innerText = `${x} elevado a ${y} é igual a ${resposta}`

}

function resultado2 () {

    var x = (document.getElementById("x").value);
    
    var resposta = (Math.sqrt(x))/2;
    
        document.getElementById("resultado2").innerText = `raiz de ${x} dividido por 2 é igual a ${resposta}`
    
}