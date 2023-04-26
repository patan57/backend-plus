//desafio1

// const http = require ('http')
// const moment = require ('moment')

// const PORT = 8080

// const server = http.createServer((peticion, respuesta) => {
//     let currentHour = moment().format('HH')
//     console.log(currentHour);
//     let texto = '-'
    // 6 y 12 => BUENOS DIAS
    // 13 y 19 => BUENAS TARDES
    // 20 y 5 => BUENAS NOCHES
//     if(currentHour >= 6 && currentHour <=12){
//         texto = "BUENOS DIAS"
//     }
//     else if(currentHour >= 13 && currentHour <=19){
//         texto = "BUENAS TARDES"
//     }
//     else if(currentHour >= 20 || currentHour <=5){
//         texto = "BUENAS NOCHES"
//     }

//     respuesta.end(texto)
// })

// const connectedServer = server.listen(PORT, () => {
//     console.log(`Servidor HTTP escuchando el puerto ${connectedServer.address().port}`);
// } )


//DESAFIO ENTREGABLE N°3
const express = require('express')
const Contenedor = require ('./desafioE2');
// const moment = require('moment')

const app = express()

const PORT = 8080

const server = app.listen(PORT,() =>{
    console.log(`Servidor prendido escuchando ${PORT}`);
})

//RUTAS
// app.get('/', (req, res) => {
//     //throw new Error('Servidor')
//     res.send('<h1 style="color:blue;"> Bienvenidos al servidor de Express</h1>')
// })

app.get('/productos', async (req, res) => {
    //throw new Error('Servidor')
    //res.send(`La cantidad de visitas: ${visitas}`)
    const productos = await products.getAll();
    res.send(productos);
})

app.get('/productosRandom', async (req, res) => {
    //throw new Error('Servidor')
    //res.send({ fyh: moment().format('DD/MM/YYYY HH:mm:ss')})
    const productos = await products.getAll();
    let numeroRandom = Math.floor(Math.random()*productos.length);
    res.send (productos[numeroRandom]);
})

server.on('error', (err) => {console.error(` =====> ERROR: ${err}`)})

const products = new Contenedor ('products.txt')