
var x;
var y;
var z;
var w;
var res;

x=parseInt(prompt("Insira a sua nota do 1º bimestre: "))
y=parseInt(prompt("Insira a sua nota do 2º bimestre: "))
z=parseInt(prompt("Insira a sua nota do 3º bimestre: "))
w=parseInt(prompt("Insira a sua nota do 4º bimestre: "))

res = (w+y+z+w)/4

alert(`A sua média é: ${res}`)
