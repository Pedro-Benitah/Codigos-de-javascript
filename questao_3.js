function verifica() {

    X = parseInt(document.getElementById("X").value);
    Y = parseInt(document.getElementById("Y").value);
    Z = parseInt(document.getElementById("Z").value);

    if (X >= Y + Z) {

        alert("Triangulo impossivel.");

    } else if (Y >= X + Z) {

        alert("Triangulo impossivel.");

    } else if (Z >= Y + X) {
 
        alert("Triangulo impossivel.");

    } else if (X == Y && Y == Z && X == Z) {

        alert("Voce tem um triangulo equilatero.");

    } else if ((X == Y && Y != Z && X != Z)) {

        alert("Voce tem um triangulo isosceles.");

    } else if ((Z == Y && Y != X && Z != X)) {

        alert("Voce tem um triangulo isosceles.");

    } else if ((X == Z && Z != Y && X != Y)) {

        alert("Voce tem um triangulo isosceles.");

    } else if (X != Y && X != Z && Z != Y && X != Z) {

        alert("Voce tem um triangulo escaleno.");

    }

}