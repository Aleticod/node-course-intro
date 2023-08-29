// const p = require('process');
// process es una funcion global
process.on('beforeExit', () => {
    console.log('El proceso va a terminar ...')
});

process.on('exit', () => {
    console.log('Ole, el proceso ha terminado ...');
    setTimeout(() => {
        console.log('Esto no se va a ver por que ya se desconecto del event loop ...');
    }, 0);
});

setTimeout(() => {
    console.log('Esto si se va ver ...')
}, 1000)

process.on('uncaughtException', (err, origin) => {
    console.error('Vaya se nos olvido capturar un error ...');
    console.error(err);
});

// noExiste();
console.log('Esto si el error no se recoge, no sale ..');