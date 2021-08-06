// 1)Imprimir o nome do usuário 8 vezes.
function escrever_nome() {

    var nome = document.getElementById("nome").value

    var numero = 0

    document.getElementById("resp").innerHTML = "Impressão: <br><br>"
    
    while (numero < 8) {
                
        var resp = document.getElementById("resp").innerHTML

        document.getElementById("resp").innerHTML = resp + nome + "<br>"

        numero++

    }

}

// 2)Imprimir a frase "Argo CESUPÃO" por N vezes
   
    function escrever_numero() {

        valor = parseInt(document.getElementById("numeral").value)

        fim = 0

    document.getElementById("resp").innerHTML = "Impressão: <br><br>"
    
    while (fim < valor) {
        
        var resp = document.getElementById("resp").innerHTML

        document.getElementById("resp").innerHTML = resp + "Argo CESUPÃO<br>"

        fim++

    }

    valor = 0

    }

// 3)Imprimir todos os valores de 0 até 10

    function verificar_condicao1() {

        impresso = 0

        document.getElementById("resp").innerHTML = "Impressão: <br><br>"

        while (impresso <= 10) {

        var resp = document.getElementById("resp").innerHTML

        document.getElementById("resp").innerHTML = resp + impresso + "<br>"

        impresso++

        }

    }

// 4)Imprimir todos os valores de 10 até 0

function verificar_condicao2() {

    impresso = 10

    document.getElementById("resp").innerHTML = "Impressão: <br><br>"

    while (impresso >= 0) {

    var resp = document.getElementById("resp").innerHTML

    document.getElementById("resp").innerHTML = resp + impresso + "<br>"

    impresso--

    }

}

// 5)Imprimir todos os valores de 0 até 10

function verificar_condicao3() {

    impresso = -10

    document.getElementById("resp").innerHTML = "Impressão: <br><br>"

    while (impresso <= 10) {

    var resp = document.getElementById("resp").innerHTML

    document.getElementById("resp").innerHTML = resp + impresso + "<br>"

    impresso++

    }

}

// 6)Imprimir um valor aleatório (entre 0 e 5) por 3 vezes

    function gerar_aleatorio() {

        valor = 0

    document.getElementById("resp").innerHTML = "Impressão: <br><br>"

    while (valor < 3) {

    var resp = document.getElementById("resp").innerHTML

    var random
    
    random = parseInt(Math.random()*6) 

    document.getElementById("resp").innerHTML = resp + random + "<br>"

    valor++

    }

    }