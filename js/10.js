// Clase Avion
class Avion {
  constructor(nombre, capacidad, destino) {
    this.nombre = nombre;
    this.capacidad = capacidad;
    this.destino = destino;
    this.listaPasajeros = [];
  }

  // Método para abordar pasajeros
  abordar(pasajero) {
    if (this.listaPasajeros.length < this.capacidad) {
      this.listaPasajeros.push(pasajero);
      document.write(`${pasajero} ha subido al avión ${this.nombre}.<br>`);
    } else {
      document.write(
        `El avión ${this.nombre} está lleno. No hay espacio para ${pasajero}.<br>`
      );
    }
  }

  // Método para mostrar información del avión
  mostrarInformacion() {
    return `Avión: ${this.nombre}, Capacidad: ${this.capacidad}, Destino: ${this.destino}, Pasajeros abordados: ${this.listaPasajeros.length}`;
  }
}

// Clase Aeropuerto
class Aeropuerto {
  constructor(nombreAeropuerto) {
    this.nombreAeropuerto = nombreAeropuerto;
    this.listaAviones = [];
  }

  // Método para agregar aviones al aeropuerto
  agregarAvion(avion) {
    this.listaAviones.push(avion);
    document.write(
      `El avión ${avion.nombre} ha sido agregado al aeropuerto ${this.nombreAeropuerto}.<br>`
    );
  }

  // Método para buscar un avión por su nombre
  buscarAvion(nombreAvion) {
    const avionEncontrado = this.listaAviones.find(
      (avion) => avion.nombre === nombreAvion
    );
    if (avionEncontrado) {
      document.write(`${avionEncontrado.mostrarInformacion()}<br>`);
      return avionEncontrado;
    } else {
      document.write(
        `No se encontró un avión con el nombre ${nombreAvion}.<br>`
      );
      return null;
    }
  }
}

// Crear el objeto Aeropuerto
const aeropuerto = new Aeropuerto("Aeropuerto Internacional");

// Crear objetos Avion con diferentes destinos
const avion1 = new Avion("Avión 101", 50, "Nueva York");
const avion2 = new Avion("Avión 202", 70, "París");
const avion3 = new Avion("Avión 303", 80, "Tokio");

// Agregar los aviones al aeropuerto
aeropuerto.agregarAvion(avion1);
aeropuerto.agregarAvion(avion2);
aeropuerto.agregarAvion(avion3);

// Buscar un avión y usar el método abordar
const avionBuscado = aeropuerto.buscarAvion("Avión 202");
if (avionBuscado) {
  avionBuscado.abordar("tomas");
  avionBuscado.abordar("Ignacio");
  avionBuscado.abordar("Pedro");
}
