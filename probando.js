// let edad = 25;

// edad = edad + 1;

// console.log(edad);

// let series = [
//     {nombre: "GOT"}
// ]; 

// series.push ({nombre: "Dark"});

// console.log(series);
// console.table(series);


// const X = 'hola'

// function exampleFunction() {
//     console.log(X);
// }


// console.log("5"+3);

// const promediar = (a, b) => (a+b)/2
// const p = promediar (4, 8)
// console.log(p);

// const ejecutar = unaFuncion => unaFuncion()

// const saludar = () => console.log('saludos');

// ejecutar(saludar)

/*ejemplo de callback*/

// function escrbirYLoguear(texto, callbackParaLoguear) {
//     console.log(texto);
//     callbackParaLoguear('archivo escrito con éxito')
// }

// escrbirYLoguear('hola mundo de los callbacks', (mensajeParaLoguear) => {
//     const fecha = new Date().toLocaleDateString()
//     console.log(`${fecha} : ${mensajeParaLoguear

//     }`);
// })

// function taskOne() {
//     console.log("task 1");
// }

// function taskTwo() {
//     console.log("task 2");
// }

// setTimeout(taskOne, 2000);

// taskTwo();

// Promise.resolve(20)
// .then (x => x + 1)
// .then (x => x * 2)
// .then (x => {
//     if (x===22) throw 'Error'
//     else return 80
// })
// .then (x => 30)
// .then (x => x / 2)
// .then (console.log )
// .catch (console.log )

const fs = require ('fs')