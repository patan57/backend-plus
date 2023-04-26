//primer desafio de la clase 5

//const generarAleatorio = () => parseInt(Math.random()*20)+1

//let salida = {

//}

//for (let i=0; i < 10000; i++) {
    //obtengo mi numero random
//    let numero = generarAleatorio()
    //verifico si mi objeto ya existe
    //if (!salida [numero]) salida [numero]= 0
    //agrego el contador
    //salida [numero]++
//}

//console.log(salida);

//segundo desafio de la clase 5

// const productos = [
//     { id: 1, nombre: 'Escuadra' , precio: 323.45},
//     { id: 2, nombre: 'Calculadora' , precio: 234.56},
//     { id: 3, nombre: 'Globo Terráqueo' , precio: 45.67},
//     { id: 4, nombre: 'Paleta Pintura' , precio: 456.78},
//     { id: 5, nombre: 'Reloj' , precio: 67.89},
//     { id: 6, nombre: 'Agenda' , precio: 78.90},
// ]

//A
// const nombres = productos.map (item => item.nombre).join(',')


//B
// let precioTotal = 0

// productos.forEach(
//     item => {
//         precioTotal += item.precio
//     }
// )

//C
// const precioPromedio = precioTotal / productos.length

//D
// const precios = productos.map (item => item.precio)
// const menorPrecio = Math.min (...precios)

//E
// const mayorPrecio = Math.max (...precios)

//F
// const redondeo = valor => Number(valor.toFixed(2))

// let info = {
//     nombres: nombres,
//     total : redondeo(precioTotal),
//     promedio: redondeo (precioPromedio),
//     minimo: menorPrecio,
//     maximo: mayorPrecio
// }

// console.log(info);

/**DESAFIO GENERICO 3 */

const moment = require ('moment')
const hoy = moment()
const nacimiento = moment ('08/04/1992', 'DD/MM/YYYY')

let cantidadDeDias = hoy.diff(nacimiento, 'days')
let cantidadDeAnios = hoy.diff(nacimiento, 'year')

console.log(`
Hoy es ${hoy.format('DD-MM-YYYY')}
Naci el ${nacimiento.format('DD-MM-YYYY')}
Desde mi nacimiento han pasado ${cantidadDeAnios} años
Desde mi nacimiento han pasado ${cantidadDeDias} dias
`);
