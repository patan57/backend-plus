// Definir variables variables que almacenen los siguiente datos:
// Un nombre: “pepe”
// Una edad: 25
// Un precio: $99.90
// Los nombres de mis series favoritas: “Dark”, “Mr Robot”, “Castlevania”
// Mis películas favoritas, en donde cada película detalla su nombre, el año de estreno, y una lista con los nombres de sus protagonistas.
// Mostrar todos esos valores por consola
// Incrementar la edad en 1 y volver a mostrarla
// Agregar una serie a la lista y volver a mostrarla

let person = "PEPE";
let edad = 25;
let precio = 99.0;
let peliculas = [
    { nombre: "Dark", anio: 2022, protas: ["Maria", "Mario"] },
    { nombre: "Mr Robot", anio: 2022, protas: ["Maria", "Mario"] },
    { nombre: "Castlevania", anio: 2022, protas: ["Maria", "Mario"] },
];

console.info(`Persona: ${person} Edad: ${edad} Precio: ${precio}`);
console.table(peliculas);

edad = edad + 1;
peliculas.push({ nombre: "Dark2", anio: 2022, protas: ["Maria2", "Mario2"] });

console.info(`Persona: ${person} Edad: ${edad} Precio: ${precio}`);
console.table(peliculas);

//clase2

class Contador {
    static contadorGlobal = 0 

    constructor(nombre){
        this.nombre = nombre;
        this.contadorIndividual = 0
        this.libros = []
    }

    agregarLibro(nombreLibro){
        this.libros.push(nombreLibro)
    }

    listarLibros() {
        return this.libros
    }

    obtenerResponsable() {
        console.log(`El nombre del Responsable es ${this.nombre}`)
    }

    obtenerCuentaIndividual(){
        console.log(`Cuenta individual de  ${this.nombre} :  ${this.contadorIndividual}`)
    }

    obtenerCuentaGlobal(){
        console.log(`Cuenta global: ${this.constructor.contadorGlobal}`)
    }

    contar() {
        this.contadorIndividual = this.contadorIndividual + 1
        this.constructor.contadorGlobal = this.constructor.contadorGlobal + 1
    }
}

const franco = new Contador('Franco')
const agustin = new Contador('Agustin')

franco.contar() // G 1 / F 1

agustin.contar() // G 2 / A 1
agustin.contar() // G 3 / A 2
agustin.contar() // G 4 / A 3

franco.contar() // G 5 / F 2

console.log(`${franco.nombre} : ${franco.contadorIndividual}`)
console.log(`${agustin.nombre} : ${agustin.contadorIndividual}`)

console.log(Contador.contadorGlobal)

// let contador1 = new Contador("franco", 0);

// contador1.obtenerResponsable()

