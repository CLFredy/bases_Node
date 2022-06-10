const fs = require('fs');
const colors = require ('colors');

const crearArchivo = async(base,listar,hasta=10) => {
    try {
        let result='';
        let consola='';
        for(i=1; i<=hasta;i++){
            result += `${base} X ${i} = ${base*i}\n`
        }
        consola=result;
        if(listar){
            console.log('==========='.bgBlue);
            console.log(`Tabla del ${base}`.green.underline);
            console.log('==========='.blue);
            console.log(consola.bgRed);
        }
        
        fs.writeFileSync(`./Salida/tabla_del_${base}.txt`,result);
        return `Archivo de la tabla ${base}`.rainbow;
    } catch (error) {
        throw error;
    }
   
}


/// linea de instrucción para poder hacer uso de la funcion en otros archivos js
module.exports ={
    //las dos llamadas son lo mismo
    //crearArchivo : crearArchivo
    crearArchivo
}
