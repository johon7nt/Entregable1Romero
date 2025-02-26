const datosConvertidor = [
    { moneda: "Dolar", cantidad: 1, valorAReal: 5.71, valorAPesosUruguayos: 38.50, valorAPesosArgentinos: 1000 },
    { moneda: "Real", cantidad: 1, valorAPesosArgentinos: 184, valorAPesosUruguayos: 7, valorADolaresEstadoUnidenses: 0.20 },
    { moneda: "Peso Uruguayo", cantidad: 1, valorAPesosArgentinos: 24.90, valorAReal: 0.24, valorADolaresEstadoUnidenses: 0.02 }
];

function consultarValor() {
    let elegirMoneda = prompt("¿Qué moneda desea elegir? (Dolar, Real, Peso Uruguayo)");
    if (elegirMoneda) {
        return elegirMoneda.toLowerCase();
    }
    return "";
}

function convertirMoneda(moneda) {
    let monedaSeleccionada = null;
    for (let i = 0; i < datosConvertidor.length; i++) {
        if (datosConvertidor[i].moneda.toLowerCase() === moneda) {
            monedaSeleccionada = datosConvertidor[i];
            break;
        }
    }
    
    if (monedaSeleccionada) {
        let cantidad = parseFloat(prompt(`Ingrese la cantidad de ${monedaSeleccionada.moneda} que desea convertir:`));
        if (isNaN(cantidad) || cantidad <= 0) {
            alert("Cantidad inválida. Intente nuevamente.");
            iniciarConvertidor();
            return;
        }
        
        alert(`Conversión para ${cantidad} ${monedaSeleccionada.moneda}:
        - A Real: ${monedaSeleccionada.valorAReal ? (Math.floor(cantidad * monedaSeleccionada.valorAReal * 100) / 100) : "No disponible"} BRL
        - A Pesos Uruguayos: ${monedaSeleccionada.valorAPesosUruguayos ? (Math.floor(cantidad * monedaSeleccionada.valorAPesosUruguayos * 100) / 100) : "No disponible"} UYU
        - A Pesos Argentinos: ${monedaSeleccionada.valorAPesosArgentinos ? (Math.floor(cantidad * monedaSeleccionada.valorAPesosArgentinos * 100) / 100) : "No disponible"} ARS
        - A Dólares: ${monedaSeleccionada.valorADolaresEstadoUnidenses ? (Math.floor(cantidad * monedaSeleccionada.valorADolaresEstadoUnidenses * 100) / 100) : "No disponible"} USD`);
    } else {
        alert("Moneda no reconocida. Intente nuevamente.");
    }
    iniciarConvertidor();
}

function iniciarConvertidor() {
    let moneda = consultarValor();
    if (moneda) {
        convertirMoneda(moneda);
    } else {
        alert("No ingresó una moneda válida.");
        iniciarConvertidor();
    }
}

iniciarConvertidor();

