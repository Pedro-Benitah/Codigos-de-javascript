function data() {

    var data = (document.getElementById("data").value);
    var data = parseInt(data[0]+data[1]+data[2]+data[3]+data[5]+data[6]+data[8]+data[9]);

    if (data < 20210409) {

        document.getElementById("tempo").innerText = "Voce esta no: Passado";

    } if (data > 20210409) {

        document.getElementById("tempo").innerText = "Voce esta no: Futuro";

    } if (data == 20210409) {

        document.getElementById("tempo").innerText = "Voce esta no: Presente";

    }

}