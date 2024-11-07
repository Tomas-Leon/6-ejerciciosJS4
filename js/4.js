class Producto {
    // Propiedades privadas
    #codigo;
    #nombre;
    #precio;
  
    constructor(codigo, nombre, precio) {
      this.#codigo = codigo;
      this.#nombre = nombre;
      this.#precio = precio;
    }
  
    // Getters y Setters
    get codigo() {
      return this.#codigo;
    }
  
    set codigo(nuevoCodigo) {
      if (Number.isInteger(nuevoCodigo) && nuevoCodigo > 0) {
        this.#codigo = nuevoCodigo;
      } else {
        console.error("El código debe ser un número entero positivo.");
      }
    }
  
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
  
    get precio() {
      return this.#precio;
    }
  
    set precio(nuevoPrecio) {
      if (nuevoPrecio > 0) {
        this.#precio = nuevoPrecio;
      } else {
        console.error("El precio debe ser un valor positivo.");
      }
    }
  
    // Método para mostrar los datos del producto
    imprimeDatos() {
      document.write(`Código: ${this.#codigo}, Nombre: ${this.#nombre}, Precio: $${this.#precio}<br>`);
    }
  }
  
  // Crear tres instancias de Producto
  const producto1 = new Producto(101, "Notebook", 1500);
  const producto2 = new Producto(102, "Celular", 800);
  const producto3 = new Producto(103, "Tablet", 500);
  
  // Guardar las instancias en un array
  const productos = [producto1, producto2, producto3];
  
  // Mostrar los datos de cada producto usando el método imprimeDatos
  document.write("Datos de los productos:<br>");
  productos.forEach(producto => producto.imprimeDatos());
  

