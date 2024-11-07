class Persona {
    // Propiedades privadas
    #nombre;
    #edad;
    #sexo;
    #peso;
    #altura;
    #anioNacimiento;
    #dni;
  
    constructor(nombre, edad, sexo, peso, altura, anioNacimiento) {
      this.#nombre = nombre;
      this.#edad = edad;
      this.#sexo = sexo; // 'H' para hombre, 'M' para mujer
      this.#peso = peso;
      this.#altura = altura;
      this.#anioNacimiento = anioNacimiento;
      this.#dni = this.generaDNI();
    }
  
    // Getters y Setters
    get nombre() {
      return this.#nombre;
    }
  
    set nombre(nuevoNombre) {
      if (typeof nuevoNombre === 'string' && nuevoNombre.trim() !== "") {
        this.#nombre = nuevoNombre;
      } else {
        console.error("El nombre debe ser un texto no vacío.");
      }
    }
  
    get edad() {
      return this.#edad;
    }
  
    set edad(nuevaEdad) {
      if (Number.isInteger(nuevaEdad) && nuevaEdad >= 0) {
        this.#edad = nuevaEdad;
      } else {
        console.error("La edad debe ser un número entero positivo.");
      }
    }
  
    get sexo() {
      return this.#sexo;
    }
  
    set sexo(nuevoSexo) {
      if (nuevoSexo === 'H' || nuevoSexo === 'M') {
        this.#sexo = nuevoSexo;
      } else {
        console.error("El sexo debe ser 'H' o 'M'.");
      }
    }
  
    get peso() {
      return this.#peso;
    }
  
    set peso(nuevoPeso) {
      if (nuevoPeso > 0) {
        this.#peso = nuevoPeso;
      } else {
        console.error("El peso debe ser un valor positivo.");
      }
    }
  
    get altura() {
      return this.#altura;
    }
  
    set altura(nuevaAltura) {
      if (nuevaAltura > 0) {
        this.#altura = nuevaAltura;
      } else {
        console.error("La altura debe ser un valor positivo.");
      }
    }
  
    get anioNacimiento() {
      return this.#anioNacimiento;
    }
  
    set anioNacimiento(nuevoAnio) {
      if (Number.isInteger(nuevoAnio) && nuevoAnio > 1900 && nuevoAnio <= new Date().getFullYear()) {
        this.#anioNacimiento = nuevoAnio;
      } else {
        console.error("El año de nacimiento debe ser un número válido.");
      }
    }
  
    get dni() {
      return this.#dni;
    }
  
    // Método para mostrar la generación según el año de nacimiento
    mostrarGeneracion() {
      let generacion = "";
      let rasgo = "";
  
      if (this.#anioNacimiento >= 1994 && this.#anioNacimiento <= 2010) {
        generacion = "Generación Z";
        rasgo = "Irreverencia";
      } else if (this.#anioNacimiento >= 1981 && this.#anioNacimiento <= 1993) {
        generacion = "Generación Y (Millennials)";
        rasgo = "Frustración";
      } else if (this.#anioNacimiento >= 1969 && this.#anioNacimiento <= 1980) {
        generacion = "Generación X";
        rasgo = "Obsesión por el éxito";
      } else if (this.#anioNacimiento >= 1949 && this.#anioNacimiento <= 1968) {
        generacion = "Baby Boom";
        rasgo = "Ambición";
      } else if (this.#anioNacimiento >= 1930 && this.#anioNacimiento <= 1948) {
        generacion = "Silent Generation (Los niños de la posguerra)";
        rasgo = "Austeridad";
      } else {
        generacion = "Desconocida";
        rasgo = "N/A";
      }
  
      document.write(`Pertenece a la ${generacion}. Rasgo característico: ${rasgo}<br>`);
    }
  
    // Método para verificar si es mayor de edad
    esMayorDeEdad() {
      if (this.#edad >= 18) {
        document.write(`${this.#nombre} es mayor de edad.<br>`);
      } else {
        document.write(`${this.#nombre} es menor de edad.<br>`);
      }
    }
  
    // Método para mostrar todos los datos de la persona
    mostrarDatos() {
      document.write(
        `Nombre: ${this.#nombre}<br>` +
        `Edad: ${this.#edad}<br>` +
        `DNI: ${this.#dni}<br>` +
        `Sexo: ${this.#sexo}<br>` +
        `Peso: ${this.#peso} kg<br>` +
        `Altura: ${this.#altura} cm<br>` +
        `Año de Nacimiento: ${this.#anioNacimiento}<br><br>`
      );
    }
  
    // Método para generar un DNI aleatorio de 8 cifras
    generaDNI() {
      return Math.floor(10000000 + Math.random() * 90000000);
    }
  }
  
  // Crear una instancia de Persona
  const persona1 = new Persona("Tomas", 25, "H", 80, 185, 1998);
  
  // Usar los métodos de la clase
  document.write("Datos de la persona:<br>");
  persona1.mostrarDatos();
  document.write("Generación:<br>");
  persona1.mostrarGeneracion();
  document.write("¿Es mayor de edad?<br>");
  persona1.esMayorDeEdad();
  
