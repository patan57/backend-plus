// Definir variables variables que almacenen los siguiente datos:
// Un nombre: “pepe”
// Una edad: 25
// Un precio: $99.90
// Los nombres de mis series favoritas: “Dark”, “Mr Robot”, “Castlevania”
// Mis películas favoritas, en donde cada película detalla su nombre, el año de estreno, y una lista con los nombres de sus protagonistas.
// Mostrar todos esos valores por consola
// Incrementar la edad en 1 y volver a mostrarla
// Agregar una serie a la lista y volver a mostrarla

// let person = "PEPE";
// let edad = 25;
// let precio = 99.0;
// let peliculas = [
//     { nombre: "Dark", anio: 2022, protas: ["Maria", "Mario"] },
//     { nombre: "Mr Robot", anio: 2022, protas: ["Maria", "Mario"] },
//     { nombre: "Castlevania", anio: 2022, protas: ["Maria", "Mario"] },
// ];

// console.info(`Persona: ${person} Edad: ${edad} Precio: ${precio}`);
// console.table(peliculas);

// edad = edad + 1;
// peliculas.push({ nombre: "Dark2", anio: 2022, protas: ["Maria2", "Mario2"] });

// console.info(`Persona: ${person} Edad: ${edad} Precio: ${precio}`);
// console.table(peliculas);

// //clase2

// class Contador {
//     static contadorGlobal = 0 

//     constructor(nombre){
//         this.nombre = nombre;
//         this.contadorIndividual = 0
//         this.libros = []
//     }

//     agregarLibro(nombreLibro){
//         this.libros.push(nombreLibro)
//     }

//     listarLibros() {
//         return this.libros
//     }

//     obtenerResponsable() {
//         console.log(`El nombre del Responsable es ${this.nombre}`)
//     }

//     obtenerCuentaIndividual(){
//         console.log(`Cuenta individual de  ${this.nombre} :  ${this.contadorIndividual}`)
//     }

//     obtenerCuentaGlobal(){
//         console.log(`Cuenta global: ${this.constructor.contadorGlobal}`)
//     }

//     contar() {
//         this.contadorIndividual = this.contadorIndividual + 1
//         this.constructor.contadorGlobal = this.constructor.contadorGlobal + 1
//     }
// }

// const franco = new Contador('Franco')
// const agustin = new Contador('Agustin')

// franco.contar() // G 1 / F 1

// agustin.contar() // G 2 / A 1
// agustin.contar() // G 3 / A 2
// agustin.contar() // G 4 / A 3

// franco.contar() // G 5 / F 2

// console.log(`${franco.nombre} : ${franco.contadorIndividual}`)
// console.log(`${agustin.nombre} : ${agustin.contadorIndividual}`)

// console.log(Contador.contadorGlobal)

// let contador1 = new Contador("franco", 0);

// contador1.obtenerResponsable()

//practicando

//desafio generico 1

//function mostrarLetras(palabra, terminar){
//    let i = 0
//    const timer = setInterval(() => {
//        if(i < palabra.legth){
//            log(palabra[i]);
//            i++;
//        }
//        else{
//            clearInterval(timer)
//            terminar()
//        }
//    }, 1000);

//}

//const fin =log('termine')

//mostrarLetras('Hola', fin)

//setTimeout(() => {mostrarLetras('hola', fin)}, 0)
//setTimeout(() => {mostrarLetras('queso', fin)}, 250)
//setTimeout(() => {mostrarLetras('casa', fin)}, 500)

//const log = p => console.log(p)//

//clase 4
// const delay = ret => {
//     for(let i = 0; i< ret*3e6; i++);
// }

// function hacerTarea(num){
//     log(`haciendo tarea ${num}`)

//     delay(100)
// }

// log('inicio')
// hacerTarea(1)
// hacerTarea(2)
// hacerTarea(3)
// hacerTarea(4)
// log('fin')
// log('otras')


// function hacerTarea(num, cb) {
//     log('haciendo tarea ' + num)
//     setTimeout(cb,100)
// }

// log('inicio de tareas');
// hacerTarea(1, () => {
//     hacerTarea(2, () => {
//         hacerTarea(3, () => {
//             hacerTarea(4, () => {
//                 log('fin de tareas')
//             })
//         })
//     })
// })
// log('otras tareas ...')// esta en paralelo con la 1



//desafio generico 2

//A 
//B
//C
// try {
    
//     fs.writeFileSync('fyh.txt', new Date().toLocaleString())
// } catch (error) {
//     throw new Error(`Error al escribir ${error}`)
// }

// try {
    
//     const contenido = fs.readFileSync('index.js', 'utf-8')
//     log(contenido)
// }
// catch (error) {
//     throw new Error(`Error al leer ${error}`)
// }

//desafio 3
// FS con callbacks

// fs.readFile('./fyh.txt', 'utf8', function(err, datos) {
//     //si hay error
//     if(err){
//         log(err)
//         return
//     }

//     //si no hay error
//     log(datos)
// })

// fs.writeFile('./fyh.txt', 'NUEVO TEXTO dos', function(e) {
//     //si hay error
//     if(e){
//         log(e)
//         return
//     }
// })

// fs.appendFile('./fyh.txt', '\n\n\nappended text as', error => {
//     if(error) {
//         log(error)
//     }else {
//         log('terminado')
//     }
// })

// fs.unlink('./fyh.txt', error => {
//     if(error) {
//         log(error)
//     }else {
//         log('Archivo Borrado')
//     }
// })

// fs.mkdir('./carpeta2', function(err) {
//     if(err) {
//         log(err)
//     }else {
//         log('Carpeta creada')
//     }
    
// })

// fs.readdir('./carpeta2', (err, nombres)=>{
//     log(nombres)
// })


//desafio 4

// const fs = require('fs')
// const log = p=> console.log(p)

// let data = ''
// fs.promises.readFile('./info.txt', 'utf8').then(contenido =>{

//     data = JSON.parse(contenido) //convirtiendo en Json
//     log(data)
//     data.contenidoObj.author = 'Coderhouse' 

//     //log(data)

//     fs.promises.writeFile('./package.json.coder', JSON.stringify(data,null,2))
//     .then(d=> log('termine'))
//     .catch(err=>log(err))

// }).catch(err=>log(err))




// Promise.resolve(30)
// .then( x => x + 1)
// .then( x => x * 2)
// .then( x => {
//     if(x==22) throw 'Error'
//     else return 80
// })
// .then( x => 30)
// .then( x => x / 2)
// .then(console.log)
// .catch(console.log)

// //desafio genérico clase 4
// try {
//     const fs = require ('fs')

// fs.writeFileSync('fyh.txt', new Date ().toLocaleString())

// } catch (error) {
//     throw new Error (`Error al escribir ${error}`
//     )
// }


// try {
//     const contenido = fs.readFileSync ('desafios.js', 'utf-8')
// console.log(contenido);
// } catch (error) {
//     throw new Error (`Error al leer ${error}`)
// }

// //callback vs promises

// //CB

// const doAsyncStuffWithCallback = (numero1, numero2, callback) => {
//     const resultado = numero1 + numero2
//     return setTimeout(() => {
//         callback(resultado)
//     }, 500)
// }

// doAsyncStuffWithCallback (1, 3, (result) => {
//     console.log(result);
// })

// //PS

// const doAsyncStuffWithPromises = (numero1, numero2) => {
//     const resultado = numero1 + numero2
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(resultado)
//         }, 500 )
//     })
// }

// doAsyncStuffWithPromises(1, 3)
// .then(result => console.log(result)
// )

// const result = await doAsyncStuffWithPromises(1, 3)


//console.log

const user = { name: 'Mauro'};
user.name = 'David';
console.log(user.name);