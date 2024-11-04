class Producto {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    // Método para mostrar los datos del producto
    imprimeDatos() {
        document.write(`Código: ${this.codigo}, Nombre: ${this.nombre}, Precio: $${this.precio}<br>`);
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

