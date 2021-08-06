function imprimir() {
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var email = document.getElementById("email").value;

    alert(`
    Nome:\a ${nome}
    Idade:\a ${idade}
    Email:\a ${email}
    `);

}