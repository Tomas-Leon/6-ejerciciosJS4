class Contacto {
  #nombre;
  #telefono;
  constructor(nombre, telefono) {
    this.#nombre = nombre;
    this.#telefono = telefono;
  }
  getNombre() {
    return this.#nombre;
  }
  setNombre(nombre) {
    this.#nombre = nombre;
  }
  getTelefono() {
    return this.#telefono;
  }
  setTelefono(telefono) {
    this.#telefono = telefono;
  }
  esIgual(contacto) {
    return this.#nombre.toLowerCase() === contacto.getNombre().toLowerCase();
  }
}
class Agenda {
  #contactos;
  #tamanio;
  constructor(tamanio = 10) {
    this.#contactos = [];
    this.#tamanio = tamanio;
  }
  aniadirContacto(contacto) {
    if (this.agendaLlena()) {
      console.log("La agenda está llena, no se puede añadir más contactos.");
      document.write(
        "La agenda está llena, no se puede añadir más contactos.<br>"
      );
      return;
    }
    if (this.existeContacto(contacto)) {
      console.log("El contacto ya existe en la agenda.");
      document.write("El contacto ya existe en la agenda.<br>");
    } else {
      this.#contactos.push(contacto);
      console.log("Contacto añadido a la agenda.");
      document.write("Contacto añadido a la agenda.<br>");
    }
  }
  existeContacto(contacto) {
    return this.#contactos.some((c) => c.esIgual(contacto));
  }
  listarContactos() {
    if (this.#contactos.length === 0) {
      console.log("La agenda está vacía.");
      document.write("La agenda está vacía.<br>");
    } else {
      console.log("Lista de contactos:");
      document.write("Lista de contactos:<br>");
      this.#contactos.forEach((contacto) => {
        console.log(
          `Nombre: ${contacto.getNombre()}, Teléfono: ${contacto.getTelefono()}`
        );
        document.write(
          `Nombre: ${contacto.getNombre()}, Teléfono: ${contacto.getTelefono()}<br>`
        );
      });
    }
  }
  buscarContacto(nombre) {
    const contacto = this.#contactos.find(
      (c) => c.getNombre().toLowerCase() === nombre.toLowerCase()
    );
    if (contacto) {
      console.log(`Teléfono de ${nombre}: ${contacto.getTelefono()}`);
      document.write(`Teléfono de ${nombre}: ${contacto.getTelefono()}<br>`);
    } else {
      console.log("Contacto no encontrado.");
      document.write("Contacto no encontrado.<br>");
    }
  }
  eliminarContacto(contacto) {
    const index = this.#contactos.findIndex((c) => c.esIgual(contacto));
    if (index !== -1) {
      this.#contactos.splice(index, 1);
      console.log("Contacto eliminado de la agenda.");
      document.write("Contacto eliminado de la agenda.<br>");
    } else {
      console.log("El contacto no existe en la agenda.");
      document.write("El contacto no existe en la agenda.<br>");
    }
  }
  agendaLlena() {
    return this.#contactos.length >= this.#tamanio;
  }

  huecosLibres() {
    const huecos = this.#tamanio - this.#contactos.length;
    console.log(`Huecos libres en la agenda: ${huecos}`);
    document.write(`Huecos libres en la agenda: ${huecos}<br>`);
    return huecos;
  }
}

// Crear una instancia de Agenda con tamaño predeterminado
const agenda = new Agenda();

// Función para mostrar el menú y gestionar opciones
function mostrarMenu() {
  let opcion;
  do {
    opcion = prompt(
      "Seleccione una opción:\n" +
        "1. Añadir contacto\n" +
        "2. Buscar contacto\n" +
        "3. Listar contactos\n" +
        "4. Eliminar contacto\n" +
        "5. Verificar si la agenda está llena\n" +
        "6. Ver huecos libres\n" +
        "7. Salir"
    );

    switch (opcion) {
      case "1":
        const nombre = prompt("Ingrese el nombre del contacto:");
        const telefono = prompt("Ingrese el teléfono del contacto:");
        const nuevoContacto = new Contacto(nombre, telefono);
        agenda.aniadirContacto(nuevoContacto);
        break;
      case "2":
        const nombreBuscar = prompt("Ingrese el nombre del contacto a buscar:");
        agenda.buscarContacto(nombreBuscar);
        break;
      case "3":
        agenda.listarContactos();
        break;
      case "4":
        const nombreEliminar = prompt(
          "Ingrese el nombre del contacto a eliminar:"
        );
        const contactoEliminar = new Contacto(nombreEliminar, "");
        agenda.eliminarContacto(contactoEliminar);
        break;
      case "5":
        if (agenda.agendaLlena()) {
          console.log("La agenda está llena.");
          document.write("La agenda está llena.<br>");
        } else {
          console.log("La agenda tiene espacio disponible.");
          document.write("La agenda tiene espacio disponible.<br>");
        }
        break;
      case "6":
        agenda.huecosLibres();
        break;
      case "7":
        console.log("Saliendo del programa.");
        document.write("Saliendo del programa.<br>");
        break;
      default:
        console.log("Opción no válida.");
        document.write("Opción no válida.<br>");
        break;
    }
  } while (opcion !== "7");
}

// Ejecutar el menú
mostrarMenu();
