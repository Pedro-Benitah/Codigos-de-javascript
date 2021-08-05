function resposta() {

var x = parseInt(document.getElementById("x").value,10);
var y = parseInt(document.getElementById("y").value,10);
var z = parseInt(document.getElementById("z").value,10);
var w = parseInt(document.getElementById("w").value,10);

var media = (x + y + z + w) / 4;
var soma = x + y+ z+ w;
var percentualx = 100*x/soma;
var percentualy = 100*y/soma;
var percentualz = 100*z/soma;
var percentualw = 100*w/soma;

alert(`
a média entre ${x}, ${y}, ${z} e ${w} é ${media}
o seu somatório é ${soma}
e o percentual de x na soma é: ${percentualx}%
e o percentual de y na soma é: ${percentualy}%
e o percentual de z na soma é: ${percentualz}%
e o percentual de w na soma é: ${percentualw}%
`);

}
