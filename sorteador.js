function sortear() {

    var menor_numero = parseInt(document.getElementById("menor_numero").value);
    var maior_numero = (parseInt(document.getElementById("maior_numero").value))+1;
    var quantificador_numeros = parseInt(document.getElementById("quantificador_numeros").value);
    var permitir_repetidos = document.getElementById("permitir_repetidos").value;
    var valor_sorteado;
    var auxiliador = 1;
    var repetidos = [];
    var x = 0;

    permitir_repetidos = permitir_repetidos[0].toUpperCase();
    if(permitir_repetidos == "S"){
        for(auxiliador=1; auxiliador<=quantificador_numeros; auxiliador++){
            valor_sorteado = parseInt(Math.random()*(maior_numero-menor_numero)+menor_numero);
            repetidos.push(valor_sorteado);
            document.getElementById("resp").innerHTML=`valor: ${repetidos}`
        }
    }else if(permitir_repetidos == "N"){
        if(quantificador_numeros <= maior_numero-menor_numero){
            repetidos.push(parseInt(Math.random()*(maior_numero-menor_numero)+menor_numero))
            for(i=1;i<quantificador_numeros;i++){
                do{
                    valor_sorteado = parseInt(Math.random()*(maior_numero-menor_numero)+menor_numero);
                    x=0
                    for(j=0; j<repetidos.length; j++){
                        if(valor_sorteado==repetidos[j]){
                            x++
                        }
                    }
                }while(x>=1);
                repetidos.push(`${valor_sorteado}`)
            }
            document.getElementById("resp").innerHTML=`valor: ${repetidos}`
        }else{
            alert("valor de quantidade inválido");
        }

    }
}