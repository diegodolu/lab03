let tc_dolar = 0.27;
let tc_euro = 0.25;
let monedaRecibir = 0;

function calcularMonto() {
    let monto = document.getElementById('input').value;
    let dolar = document.getElementById('dolar').checked;
    let euro = document.getElementById('euro').checked;

    if (dolar) {
        monedaRecibir = monto * tc_dolar;
        alert("Recibiras $" + monedaRecibir.toFixed(2) + " dolares");
    } else if (euro) {
        monedaRecibir = monto * tc_euro;
        alert("Recibiras €" + monedaRecibir.toFixed(2) + " euros");
    } 
}

