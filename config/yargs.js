

const argv = require('yargs')
.option('b',{
        alias : 'base',
        type : 'number',
        demandOption : true,
        describe : 'Numero base para realizar la multiplicación'
})
.option('l',{
    alias : 'listar',
    type :'boolean',
    default : false,
    describe : 'Bandera para listar en pantalla la tabla de multiplicar'
})
.option('h',{
    alias : 'hasta',
    type : 'number',
    default : 10,
    describe : 'Numero limite para mostrar la tabla de multiplicación'
})
.check( (argv,option) => {
    if(isNaN(argv.b))
        throw 'La base ingresada no es un numero';
     if(isNaN(argv.h))
        throw 'El número limite debe ser un numero'   
     return true;   
} )
.argv;

module.exports = argv;