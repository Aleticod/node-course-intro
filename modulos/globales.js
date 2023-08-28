let i = 0;

let interval = setInterval(() => {
    console.log('Hola');
    if (i === 3) {
        clearInterval(interval);
    }
    i++;
}, 1000);

setImmediate(function() {
    console.log('Hola');
})

console.log(__dirname);
console.log(__filename);

// Definir variables globales
global.mivariable = 'miValor';
console.log(mivariable)