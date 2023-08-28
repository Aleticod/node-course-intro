// Esta funcion es asincrona
function hola(nombre, miCallback) {
    setTimeout(function() {
        console.log('Hola ' + nombre);
        miCallback(nombre)
    }, 1000);
}

// Esta funcion es asincrona
function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log('Adios ' + nombre);
        otroCallback();
    }, 800);
}

console.log('Iniciando proceso...')

hola('Carlos', function(nombre) {
    adios(nombre, function() {
        console.log('Terminando proceso ...');
    });
});