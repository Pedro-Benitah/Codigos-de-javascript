function entrar() {

    var login = document.getElementById("login").value
    var senha = document.getElementById("senha").value

    if (login == "cesupa" && senha == "123123") {

    window.location.href = "https://store.steampowered.com/app/570940/DARK_SOULS_REMASTERED/"

    } else {

        alert("Login ou senha incorretos")

    }
}