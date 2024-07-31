
alert("Sistema de carga de facturas y pago de proveedores")
const usuario = prompt("Ingresa tu nombre")


const proveedores = []

class factura {
    constructor(numerofc, nombre, monto) {
        this.numerofc = numerofc;
        this.nombre = nombre;
        this.monto = monto;
    }
}

let pagodeldia;

do {
    pagodeldia = parseInt(prompt("Bienvenidx " + usuario + "\n\nIMPORTANTE:\nDe 1 a 5 facturas por pago\nCuántas ingresas hoy?"));
    if (pagodeldia > 0 && pagodeldia < 6) {
        for (i = 0; i < pagodeldia; i++) {
            const facturita = new factura(prompt("Numero de factura"), prompt("Nombre del proveedor"), parseInt(prompt("Monto SIN IVA de la factura")))

            proveedores.push(facturita)
        }
    } else {
        alert("Ingresa opciones válidas")
    }
} while (pagodeldia < 1 || pagodeldia > 5 || isNaN(pagodeldia));

let mensaje = "";

proveedores.forEach(el => {
    mensaje += "Número de FC: " + el.numerofc + "\nProveedor: " + el.nombre + "\n$" + el.monto + "\n\n"
});

alert(usuario + "\nTUS FACTURAS CARGADAS\n\n" + mensaje)

const subtotalpago = proveedores.reduce((acc, el) => acc + el.monto, 0)

alert("SUBTOTAL PAGO DEL DÍA:\n$ " + subtotalpago)

let condicionfiscal;

do {
    condicionfiscal = parseInt(prompt("CONDICION FISCAL\n\n1. Exento\n2. IVA 21%"))
    if (condicionfiscal == 1) {
        alert("PAGO TOTAL DEL DIA: \n$" + subtotalpago)
    } else if (condicionfiscal == 2) {
        let totalConIva = subtotalpago*1.21
        alert("PAGO TOTAL DEL DIA: \n$" + totalConIva)
    } else {
        alert("Ingresa opciones validas")
    }
} while (condicionfiscal < 1 || condicionfiscal > 2 || isNaN(condicionfiscal))

alert("Gracias!")


