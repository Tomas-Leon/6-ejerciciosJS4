class Animal {
  // Propiedades privadas
  #nombre;
  #edad;

  constructor(nombre, edad) {
    this.#nombre = nombre;
    this.#edad = edad;
  }

  // Getters y Setters
  get nombre() {
    return this.#nombre;
  }

  set nombre(nuevoNombre) {
    if (typeof nuevoNombre === 'string' && nuevoNombre.trim() !== "") {
      this.#nombre = nuevoNombre;
    } else {
      console.error("El nombre debe ser una cadena no vacía.");
    }
  }

  get edad() {
    return this.#edad;
  }

  set edad(nuevaEdad) {
    if (Number.isInteger(nuevaEdad) && nuevaEdad > 0) {
      this.#edad = nuevaEdad;
    } else {
      console.error("La edad debe ser un número entero positivo.");
    }
  }

  // Método que puede ser sobrescrito por las clases hijas
  emitirSonido() {
    document.write(`${this.#nombre} emite un sonido.<br>`);
  }
}


// Clase Perro que hereda de Animal
class Perro extends Animal {
  // Sobrescribimos el método emitirSonido
  emitirSonido() {
    document.write(`${this.nombre} dice: ¡Guau!<br>`);
  }
}

// Clase Gato que hereda de Animal
class Gato extends Animal {
  // Sobrescribimos el método emitirSonido
  emitirSonido() {
    document.write(`${this.nombre} dice: ¡Miau!<br>`);
  }
}

// Crear instancias de Perro y Gato
const miPerro = new Perro("Manzo", 10);
const miGato = new Gato("Michi", 4);

// Llamar a los métodos emitirSonido
miPerro.emitirSonido(); 
miGato.emitirSonido(); 

// Modificar los valores usando los setters
miPerro.nombre = "Rex"; 
miGato.edad = 5;

// Mostrar los nuevos valores
document.write(`<br>Nuevo nombre de perro: ${miPerro.nombre}<br>`);
document.write(`Nueva edad de gato: ${miGato.edad}<br>`);
