var conta_corrente = {saque: [ ], deposito: [ ]};
var resp = document.getElementById("resposta")
var total_saques
var total_depositos

function depositar() {
    conta_corrente.deposito.push(parseFloat(document.getElementById("deposito").value))
    document.getElementById("deposito").value = ""
    resp.innerHTML = "Depósito confirmado"
}
function sacar() {
    conta_corrente.saque.push(parseFloat(document.getElementById("saque").value))
    document.getElementById("saque").value = ""
    resp.innerHTML = "Saque confirmado"
}
function verificar_saque() {
    var saques = "Saques:"
    total_saques = 0
    for (var i = 0; i < conta_corrente.saque.length; i++) {
        saques += ` ${conta_corrente.saque[i]} `
        if (i < conta_corrente.saque.length-1){
            saques += "+"
        }
        total_saques += conta_corrente.saque[i]
    }
    resp.innerHTML = `${saques}= ${total_saques}`
}
function verificar_deposito() {
    var depositos = "Depositos:"
    total_depositos = 0
    for (var i = 0; i < conta_corrente.deposito.length; i++) {
        depositos += ` ${conta_corrente.deposito[i]} `
        if (i < conta_corrente.deposito.length-1){
            depositos += "+"
        }
        total_depositos += conta_corrente.deposito[i]
    }
    resp.innerHTML = `${depositos}= ${total_depositos}`
}
function verificar_saldo() {
    resp.innerHTML = `Valor da conta corrente: ${total_depositos-total_saques}`
}
function sair() {
    document.write("<h1>FIM</h1>")
}