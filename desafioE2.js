const fs = require ('fs');

class Contenedor {
    
    constructor(file){
        this.file = file;
    }

    writeFile = async data => {
            try {
                await fs.promises.writeFile(
                    this.file, JSON.stringify(data, null, 2)
                )
            } catch (err) {
                console.log(`error: ${err}`);
            }
        }

    getAll = async() => {
        try {
            const productos = await fs.promises.readFile(this.file, 'utf-8')
            return JSON.parse(productos);
        } catch (err) {
            if(err.message.includes('no existe tal archivo en el directorio')) return [];
            console.log(`error: ${err}`);
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

module.exports = Contenedor; 
