function tempo() {

    var idade = parseInt(document.getElementById("idade").value);
    meses = idade * 12;
    dias = idade * 365.25;
    horas = dias * 24;
    minutos = horas * 60;

    alert(`
    Você tem: ${idade} em anos de vida;
    Você tem: ${meses} em meses de vida;
    Você tem: ${dias} em dias de vida;
    Você tem: ${horas} em horas de vida;
    Você tem: ${minutos} em minutos de vida.    
    `);
}