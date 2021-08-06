
function processar() {
    var x;
    var y;
    var x_a_y; 
    var y_a_x;
    var espaco;
    var auxiliador;
        
    x = parseInt(document.getElementById("x").value);
    y = parseInt(document.getElementById("y").value);

    x_a_y = [];
    y_a_x = [];
    
    espaco = Math.abs(y-x);
    
    if(x > y){
        auxiliador = y + 1
        for(var i = 0; i < espaco-1; i++){
            if(auxiliador % 10 == 0){
                auxiliador++
                espaco--
                if(i==espaco){
                    break
                }
            }
            y_a_x[i] = auxiliador;
            auxiliador++
        }
        auxiliador = x - 1
        for(var i = 0; i < espaco; i++){
            if(auxiliador % 10 == 0){
                auxiliador--
                espaco--
                if(i==espaco){
                    break
                }
            }
            x_a_y[i] = auxiliador;
            auxiliador--
        }
    }
    else if(x < y){
        auxiliador = x + 1
        for(var i = 0; i < espaco-1; i++){
            if(auxiliador % 10 == 0){
                auxiliador++
                espaco--
                if(i==espaco){
                    break
                }
            }
            x_a_y[i] = auxiliador;
            auxiliador++
        }
        auxiliador = y - 1
        for(var i = 0; i < espaco; i++){
            if(auxiliador % 10 == 0){
                auxiliador--
                espaco--
                if(i==espaco){
                    break
                }
            }
            y_a_x[i] = auxiliador;
            auxiliador--
        }
    }
    

    document.getElementById("print").innerHTML = `Aqui estão os de números x a y! ${x_a_y}
    <br><br>
    Aqui estão os números de y a x! ${y_a_x}`
}

