const Contenedor = require ('./desafioE2');

const products = new Contenedor ('products.txt');

const test = async () => {
    let save = await products.save ({
        title: 'coderhouse',
        price: 12345,
        thumbnail: 'https:asd123456'
    });

    let getAll = await products.getAll();
    let getById = await products.getById();
    let deleteById = await products.deleteById();
    let deleteAll = await products.deleteAll();
    console.log(save);
    console.log(getAll);
    console.log(getById);
    console.log(deleteById);
    console.log(deleteAll);

};

test ();