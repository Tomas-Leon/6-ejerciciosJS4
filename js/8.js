class Persona {
  // Propiedades privadas
  #nombre;
  #edad;
  #profesion;

  constructor(nombre, edad, profesion) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#profesion = profesion;
  }

  // Métodos get y set para acceder y modificar las propiedades privadas
  getNombre() {
    return this.#nombre;
  }

  setNombre(nombre) {
    this.#nombre = nombre;
  }

  getEdad() {
    return this.#edad;
  }

  setEdad(edad) {
    this.#edad = edad;
  }

  getProfesion() {
    return this.#profesion;
  }

  setProfesion(profesion) {
    this.#profesion = profesion;
  }

  // Método para saludar
  saludar() {
    document.write(
      `Hola, mi nombre es ${this.#nombre}, tengo ${this.#edad} años y soy ${
        this.#profesion
      }.<br>`
    );
  }

  // Método para despedirse
  despedirse() {
    document.write(`Adiós, fue un placer.<br>`);
  }
}

// Crear dos objetos de la clase Persona con diferentes valores
const persona1 = new Persona("Tomas", 25, "programamdor");
const persona2 = new Persona("Ignacio", 22, "constructor");

// Llamar a los métodos de cada objeto
document.write("Interacción con persona1:<br>");
persona1.saludar();
persona1.despedirse();

document.write("<br>Interacción con persona2:<br>");
persona2.saludar();
persona2.despedirse();
