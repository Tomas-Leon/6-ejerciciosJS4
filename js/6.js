class Libro {
  // Declaración de propiedades privadas
  #ISBN;
  #titulo;
  #autor;
  #numeroPaginas;

  constructor(ISBN, titulo, autor, numeroPaginas) {
    this.#ISBN = ISBN;
    this.#titulo = titulo;
    this.#autor = autor;
    this.#numeroPaginas = numeroPaginas;
  }

  // Métodos get y set para cada propiedad
  getISBN() {
    return this.#ISBN;
  }
  setISBN(ISBN) {
    this.#ISBN = ISBN;
  }

  getTitulo() {
    return this.#titulo;
  }
  setTitulo(titulo) {
    this.#titulo = titulo;
  }

  getAutor() {
    return this.#autor;
  }
  setAutor(autor) {
    this.#autor = autor;
  }

  getNumeroPaginas() {
    return this.#numeroPaginas;
  }
  setNumeroPaginas(numeroPaginas) {
    this.#numeroPaginas = numeroPaginas;
  }

  // Método para mostrar la información del libro
  mostrarLibro() {
    document.write(
      `El libro "${this.#titulo}" con ISBN ${this.#ISBN} creado por el autor ${
        this.#autor
      } tiene ${this.#numeroPaginas} páginas.<br>`
    );
  }
}

// Crear dos instancias de la clase Libro
const libro1 = new Libro(
  "978-3-16-148410-0",
  "El Quijote",
  "Miguel de Cervantes",
  863
);
const libro2 = new Libro(
  "978-1-40-289462-6",
  "Cien Años de Soledad",
  "Gabriel García Márquez",
  471
);

// Mostrar la información de cada libro
document.write("Información de los libros:<br>");
libro1.mostrarLibro();
libro2.mostrarLibro();

// Comparar cuál libro tiene más páginas
if (libro1.getNumeroPaginas() > libro2.getNumeroPaginas()) {
  document.write(
    `<br>El libro "${libro1.getTitulo()}" tiene más páginas (${libro1.getNumeroPaginas()}) que "${libro2.getTitulo()}" (${libro2.getNumeroPaginas()}).<br>`
  );
} else if (libro1.getNumeroPaginas() < libro2.getNumeroPaginas()) {
  document.write(
    `<br>El libro "${libro2.getTitulo()}" tiene más páginas (${libro2.getNumeroPaginas()}) que "${libro1.getTitulo()}" (${libro1.getNumeroPaginas()}).<br>`
  );
} else {
  document.write(
    `<br>Ambos libros tienen la misma cantidad de páginas (${libro1.getNumeroPaginas()}).<br>`
  );
}
