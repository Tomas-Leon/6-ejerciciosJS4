class Cuenta {
    constructor(titular) {
        this.titular = titular;
        this.saldo = 0;
    }

    ingresar(cantidad) {
        if (cantidad > 0) {
            this.saldo += cantidad;
        } else {
            document.write("La cantidad a ingresar debe ser positiva.<br>");
        }
    }

    extraer(cantidad) {
        if (cantidad > 0 && cantidad <= this.saldo) {
            this.saldo -= cantidad;
        } else if (cantidad > this.saldo) {
            document.write("Fondos insuficientes.<br>");
        } else {
            document.write("La cantidad a extraer debe ser positiva.<br>");
        }
    }

    informar() {
        return `Titular: ${this.titular}, Saldo: $${this.saldo}<br>`;
    }
}

// Crear la cuenta de Alex
const cuenta = new Cuenta("Alex");

// Mostrar el estado inicial de la cuenta
document.write(cuenta.informar());

// Ingresar dinero a la cuenta
cuenta.ingresar(500);
document.write(cuenta.informar()); // Mostrar estado tras ingreso

// Extraer dinero de la cuenta
cuenta.extraer(200);
document.write(cuenta.informar()); // Mostrar estado tras extracción
