//EJEMPLOS VISTOS EN CLASE
// import express from "express";

// const app = express();

// app.get('/api/mensaje', (req, res) =>{
//     console.log(`Nueva request de: ${req.ip}`);

//     res.json({
//         status: "Ok",
//         data: {
//             saludo:"Hola mundo!",
//         },
//     });
// });

// app.listen(3000, () => {
//     console.log("Server listening http://127.0.0.1:3000");
// })

//DESAFIO 1 CLASE 7
import express from "express";

const app = express();
const frase = "Hola mundo como estas"

app.get("/api/frase", (req, res) =>{
    res.json({frase});
});

app.get("/api/letra/:num", (req, res) =>{
    const indiceLetra = Number(req.params.num)-1;

    if (isNaN(Number(req.params.num))) {
        return res.json ({error: "El parametro no es un numero"});
    }

    res.json({ letra: frase[indiceLetra]});
});

app.get("/api/palabra/:num", (req, res) =>{
    const indicePalabra = Number(req.params.num)-1;
    const fraseArray = frase.split("");

    if (isNaN(Number(req.params.num))) {
        return res.json ({error: "El parametro no es un numero"});
    }

    res.json({ palabra: fraseArray[indicePalabra]});
});

app.listen(3000, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('Server listening port 3000');
    }
})
