var numeros = {"narcisista":[]}

function testar() {
    var quantia_numeros = document.getElementById("x").value;
    var numero;
    var soma;
    var total=0;
    var algarismos = []
    numeros.narcisista = ["Números narcisistas encontrados: "]
    for(var i=0; i<=quantia_numeros; i++) {
        numero=`${i}`;
        soma=0
        for(var j=0; j<numero.length; j++) {
            algarismos[j]=parseInt(numero[j])
            soma+=parseInt(Math.pow(algarismos[j], algarismos.length))
            if(numero==soma){
                total++
                numeros.narcisista.push(soma);
            }
        } 
    }
    document.getElementById("lista_numeros").innerHTML =`Até o número ${numero}, foram encontrados ${total} números narcisistas.<br>`
    document.getElementById("lista_numeros").innerHTML+=numeros.narcisista
}