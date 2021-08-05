var nome, sobrenome, idade, peso, altura, email

nome = prompt("escreva o seu nome: ")
sobrenome = prompt("escreva o seu sobrenome: ")

document.write("Seu nome é: <br><br>")
document.write(`${nome} ${sobrenome}`)

document.write("<br><br>")

document.write(`${nome}#${sobrenome}`)

document.write("<br><br>")

document.write(`${nome}<br>${sobrenome}`)

idade = prompt("Agora escreva a sua idade: ")
peso = prompt("O seu peso: ")
altura = prompt("A sua altura: ")
email = prompt("E por último, o seu email: ")

document.write("<br><br>")

document.write(`Você tem ${idade} anos<br>`)
document.write(`Seu peso é: ${peso}kg<br>`)
document.write(`Sua altura é: ${altura}m<br>`)
document.write(`E o seu email é: ${email}`)