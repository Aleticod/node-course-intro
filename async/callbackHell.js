// Esta funcion es asincrona
function hola(nombre, miCallback) {
    setTimeout(function() {
        console.log('Hola ' + nombre);
        miCallback(nombre)
    }, 1000);
}

function hablar(callbackHablar) {
    setTimeout(function() {
        console.log('Bla bla bla bla ....');
        callbackHablar();
    }, 1000);
}

function conversacion(nombre, veces, callback) {
    if (veces > 0) {
        hablar(function() {
            conversacion(nombre, veces - 1, callback);
        })
    } else {
        callback(nombre);
    }
    
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
    conversacion(nombre, 5, function() {
        adios(nombre, function() {
            console.log('Terminando proceso...')
        });
    });
});

// hola('Carlos', function(nombre) {
//     hablar(function() {
//         hablar(function() {
//             adios(nombre, function() {
//                 console.log('Terminando proceso ...');
//             });
//         });
//     });
// });