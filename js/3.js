class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
  // Método para modificar el alto
  setAlto(nuevoAlto) {
    if (nuevoAlto > 0) {
      this.alto = nuevoAlto;
    } else {
      document.write("El alto debe ser un valor positivo.<br>");
    }
  }
  // Método para modificar el ancho
  setAncho(nuevoAncho) {
    if (nuevoAncho > 0) {
      this.ancho = nuevoAncho;
    } else {
      document.write("El ancho debe ser un valor positivo.<br>");
    }
  }
  // Método para mostrar las propiedades del rectángulo
  mostrarPropiedades() {
    return `Alto: ${this.alto}, Ancho: ${this.ancho}<br>`;
  }
  // Método para calcular el perímetro del rectángulo
  calcularPerimetro() {
    return 2 * (this.alto + this.ancho);
  }
  // Método para calcular el área del rectángulo
  calcularArea() {
    return this.alto * this.ancho;
  }
}

// Crear un rectángulo con alto 10 y ancho 5
const rectangulo = new Rectangulo(10, 5);

// Mostrar las propiedades iniciales del rectángulo
document.write(rectangulo.mostrarPropiedades());

// Calcular y mostrar el perímetro y el área
document.write(`Perímetro: ${rectangulo.calcularPerimetro()}<br>`);
document.write(`Área: ${rectangulo.calcularArea()}<br>`);

// Modificar el alto y ancho del rectángulo
rectangulo.setAlto(20);
rectangulo.setAncho(15);

// Mostrar las propiedades modificadas, perímetro y área actualizados
document.write("<br>Después de modificar las dimensiones:<br>");
document.write(rectangulo.mostrarPropiedades());
document.write(`Perímetro: ${rectangulo.calcularPerimetro()}<br>`);
document.write(`Área: ${rectangulo.calcularArea()}<br>`);
