
function somar() {
    var x = parseInt(document.getElementById("x").value);
    var y = parseInt(document.getElementById("y").value);

    var soma = x + y;

    alert(`${x} mais ${y} é igual a: ${soma}`);
}
function subtrair() {
    var x = parseInt(document.getElementById("x").value);
    var y = parseInt(document.getElementById("y").value);
    
    var subtra = x - y;
    
    alert(`${x} menos ${y} é igual a: ${subtra}`);
}
function multiplicar() {
    var x = parseInt(document.getElementById("x").value);
    var y = parseInt(document.getElementById("y").value);
        
    var multiplica = x * y;
        
    alert(`${x} vezes ${y} é igual a: ${multiplica}`);
}
function dividir() {
    var x = parseInt(document.getElementById("x").value);
    var y = parseInt(document.getElementById("y").value);
            
    var divid = x / y;
            
            alert(`${x} dividido por ${y} é igual a: ${divid}`);
}