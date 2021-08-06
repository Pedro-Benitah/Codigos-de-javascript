/*
1) Criar um programa contendo duas variaveis x e y, onde x 
é igual a 5 e y igual 2.
    O programa deve imprimir em tela o resultado entre x e y
    para:

    OPERADORES ARITMÉTICOS
    x + y = 7 OU  5 mais 2 é igual a 7

    OPERADORES RELACIONAIS

    OPERADORES LÓGICOS
*/

var x;
var y;
var resp;

x = 5;
y = 2;

document.write("<hr>");
document.write("OPERADORES ARITMETICOS: + - * /");
document.write(`<br>`);
document.write(`x + y = ${x+y}`);
document.write(`<br>`);

document.write(`x - y = ${x-y}`);
document.write(`<br>`);

resp =x*y
document.write(`x * y = ${resp}`);
document.write(`<br>`);

resp = x/y;
document.write(`${x} / ${y} = ${resp}`);
document.write(`<br>`);

document.write(`<hr>`);
document.write(`OPERADORES RELACIONAIS: == =! > < >= <=`);
document.write(`<br>`);

resp = x == y;
document.write(`${x} eh igual a ${y} = ${resp}`);
document.write(`<br>`);

resp = x =! y;
document.write(`${x} não eh igual a ${y} = ${resp}`);
document.write(`<br>`);

resp = x > y;
document.write(`${x} eh  maior que ${y} = ${resp}`);
document.write(`<br>`);

resp = x < y;
document.write(`${x} eh menor que ${y} = ${resp}`);
document.write(`<br>`);

resp = x >= y;
document.write(`${x} eh maior ou igual a ${y} = ${resp}`);
document.write(`<br>`);

resp = x < y;
document.write(`${x} eh menor ou igual a ${y} = ${resp}`);
document.write(`<br>`);

document.write("<hr>");

