function entrar() {

    var usuario = document.getElementById("usuario").value;
    var senha   = document.getElementById("senha").value;

    if (usuario == "Pedro Benitah" && senha == "Abc101918") {

        alert(`Seja bem vindo ${usuario}`);
    } else {

        alert(`Usuário ou senha incorretos`);
    }
}