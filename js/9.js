// Clase base Animal
class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  // Método que puede ser sobrescrito por las clases hijas
  emitirSonido() {
    document.write(`${this.nombre} emite un sonido.<br>`);
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
