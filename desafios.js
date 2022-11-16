
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

const fs = require('fs');
const products = fs.writeFileSync('products.txt');

const listado = async () => {
    let save = await products.save({
        title:'Ford Ecosport',
        price: 5000000,
        thumbnail:'https://www.ford.com.ar/crossovers-suvs-4x4/nueva-ecosport/'
    },
    {
        title:'Ford Bronco',
        price: 7000000,
        thumbnail:'https://www.ford.com.ar/crossovers-suvs-4x4/bronco-sport/'
    },
    {
        title:'Ford Ranger',
        price: 6000000,
        thumbnail:'https://www.ford.com.ar/crossovers-suvs-4x4/nueva-ranger/?intcmp=tds-ranger'
    })
}


class Contenedor {
    
    constructor(archivo){
        this.archivo = archivo;
    }

    writeFile = async data =>{
        try {
            await fs.promises.writeFile(
                this.archivo, JSON.stringify(data, null, 2)
            )
        } catch (error) {
            console.log(`error: ${error}`);
        }
    }

    getAll = async() => {
        try {
            const productos = await fs.promises.readFile(this.archivo, 'utf-8')
            return JSON.parse(productos);
        } catch (error) {
            if(error.message.includes('no existe tal archivo en el directorio')) return [];
            console.log(`error: ${error}`);
        }
    }

    save = async objeto => {
        let productos = this.getAll();
        try {
            let newId;
            productos.length === 0 ? newId = 1 : newId = productos[productos.length-1].id + 1; 
            let newObjeto = {...objeto, id: newId};
            productos.push(newObjeto);
            await this.writeFile(productos);
            return newObjeto.id ;  
        } catch (error) {
            console.log(`error: ${error}`);
        }
    }

    getById = async id => {
        let productos = await this.getAll();
        try {
            const objeto = productos-findSourceMap(id => productos.id === id);
            return objeto ? objeto : null;
        } catch (error) {
            console.log(`error: ${error}`);
        }
    }

    deleteById = async id => {
        let productos = await this.getAll();
        try {
            productos = productos.filter(producto => producto.id != id);
            await this.writeFile(productos);
        } catch (error) {
            console.log(`error: ${error}`); 
        }
    }

    deleteAll = async() => {
        this.writeFile([]);
    }
}
