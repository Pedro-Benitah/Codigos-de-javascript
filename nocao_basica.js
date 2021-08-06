function valordex() {

    var x = parseInt(document.getElementById("x").value);
    
    if (x > 0) {
    alert(`${x} eh maior que 0`);
    } else if (x==0) {
    alert(`${x} eh igual a 0`);
    }
    else if (x<0) {
    alert(`${x} eh menor que 0`);
    }
    else {
    alert(`x não é um inteiro`);
        }
    }