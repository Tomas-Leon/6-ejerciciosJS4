class Cuenta {
    // Propiedades privadas
    #titular;
    #saldo;
  
    constructor(titular) {
      this.#titular = titular;
      this.#saldo = 0;
    }
  
    // Getter y Setter para titular
    get titular() {
      return this.#titular;
    }
  
    set titular(nuevoTitular) {
      if (typeof nuevoTitular === 'string' && nuevoTitular.trim() !== "") {
        this.#titular = nuevoTitular;
      } else {
        console.error("El titular debe ser un nombre válido.");
      }
    }
  
    get saldo() {
      return this.#saldo;
    }
  
    // Método para ingresar dinero
    ingresar(cantidad) {
      if (cantidad > 0) {
        this.#saldo += cantidad;
      } else {
        document.write("La cantidad a ingresar debe ser positiva.<br>");
      }
    }
  
    // Método para extraer dinero
    extraer(cantidad) {
      if (cantidad > 0 && cantidad <= this.#saldo) {
        this.#saldo -= cantidad;
      } else if (cantidad > this.#saldo) {
        document.write("Fondos insuficientes.<br>");
      } else {
        document.write("La cantidad a extraer debe ser positiva.<br>");
      }
    }
  
    // Método para informar el estado de la cuenta
    informar() {
      return `Titular: ${this.#titular}, Saldo: $${this.#saldo}<br>`;
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
  
