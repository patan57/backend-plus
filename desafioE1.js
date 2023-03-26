
class Usuario {
    constructor (nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;     
    }

    getFullName() {
        return `El nombre del ganador por sorteo es ${this.nombre} ${this.apellido}`;
    }

    addMascota(mascota) {
        this.mascotas.push (mascota);
    }

    countMascotas() {
        return this.mascotas.length;
    }

    addBook (nombre, autor) {
        this.libros.push ({nombre:nombre, autor: autor}
            )
    }

    getBookNames() {
        return this.libros.filter((libro => libro.nombre))
    }

    }

const pepe = new Usuario("Jose", "Argento", [
    {nombre: "100 años de soledad", autor: "Gabriel García Marquez"},
    {nombre: "rosaura a las 10", autor: "Marcos Denevi"},
], ["Pepita", "Adonis"]
);

pepe.addMascota("Colitas");
pepe.addBook("el juguete rabioso","Roberto Arlt");

console.log(pepe.getFullName());
console.log(pepe.countMascotas());
console.log(pepe.getBookNames());

//fin primera entrega

//segundo desafio- Manejo de archivos



