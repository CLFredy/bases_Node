
// importar otro "js"
const { crearArchivo } = require("./helpers/multiplicacion");
const  argv  = require("./config/yargs");
const colors = require ('colors');
//const { argv } = require("process");
//const { number, option } = require("yargs");



console.clear();

// imprime informacion del proceso argv
//console.log( process.argv);

// imprime lo que evalua el paquete de yargs
//console.log( argv );
//console.log('Base = : ',argv.base);

// forma tradicional y sin validaciones de leer un valor por consola usando el proceso de argumentos "argv"
/*
const [ , , arg3 = 'base=5'] = process.argv;
const [ , base = 5] = arg3.split('=') ;
*/



crearArchivo(argv.b,argv.l,argv.h)
                .then( nombreArchivo => console.log (nombreArchivo.bgMagenta, 'Creado correctamente..'.rainbow))
                .catch(err => {console.log(err)});

           