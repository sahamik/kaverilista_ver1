
var kaveriLista = [];

function lisaaJaTulostaKaverit() {
    var nimi = document.getElementById("nimi").value;

    if (nimi == "") {
        alert("Tekstikenttä on tyhjä. Syötä nimi:")
    } else {
        kaveriLista.push(nimi);
        kaverilista();
    }
}

function kaverilista() {
    var lista = "";

    for (var i = 0; i < kaveriLista.length; i++) {
        lista = lista + (i+1) + ". " + kaveriLista[i] + "<br>"

        
        if (kaveriLista.length == 10) {
            document.getElementById("kaveriLista").innerHTML = lista;
        }
    }
}
