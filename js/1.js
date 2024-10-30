const auto = {
  //propiedades => clave : valor
  marca: "Chevrolet",
  modelo: "Tracker",
  color: "bordo",
  encendido: false,
  //metodos => clave : funcion
  encender: function () {
    if (!this.encendido) {
      this.encendido = true;
      document.write(`<p>El auto 🚗 ${this.marca}, ${this.modelo} esta encendido ✔</p>`);
    } else {
      document.write(
        `<p>El auto 🚗 ${this.marca}, ${this.modelo} ya estaba encendido ✔</p>`
      );
    }
  },
  apagar: function () {
    if (this.encendido) {
      this.encendido = false;
      document.write(`<p>El auto 🚗 ${this.marca}, ${this.modelo} esta apagado ❌<p/>`);
    } else {
      document.write(`<p>El auto 🚗 ${this.marca}, ${this.modelo} ya estaba apagado ❌</p>`);
    }
  },
};

auto.encender();
auto.encender();
auto.apagar();
auto.apagar();
