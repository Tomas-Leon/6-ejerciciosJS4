// Clase base Animal
class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  // Método que puede ser sobrescrito por las clases hijas
  emitirSonido() {
    document.write(`${this.nombre} emite un sonido.<br>`);
    console.log(`${this.nombre} emite un sonido.`);
  }
}

// Clase Perro que hereda de Animal
class Perro extends Animal {
  // Sobrescribimos el método emitirSonido
  emitirSonido() {
    document.write(`${this.nombre} dice: ¡Guau!<br>`);
    console.log(`${this.nombre} dice: ¡Guau!`);
  }
}

// Clase Gato que hereda de Animal
class Gato extends Animal {
  // Sobrescribimos el método emitirSonido
  emitirSonido() {
    document.write(`${this.nombre} dice: ¡Miau!<br>`);
    console.log(`${this.nombre} dice: ¡Miau!`);
  }
}

// Crear instancias de Perro y Gato
const miPerro = new Perro("Fido", 4);
const miGato = new Gato("Michi", 2);

// Llamar a los métodos emitirSonido
miPerro.emitirSonido(); // Fido dice: ¡Guau!
miGato.emitirSonido(); // Michi dice: ¡Miau!
