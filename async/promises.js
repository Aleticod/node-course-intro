// Esta funcion es asincrona
function hola(nombre) {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            console.log('Hola ' + nombre);
            resolve(nombre)
        }, 1000);
    });
}

function hablar(nombre) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log('Bla bla bla ...');
            reject('Hay un error')
        }, 1000);
    });
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
function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Adios ' + nombre);
            resolve();
        }, 800);
    })
}


console.log('Iniciando el proceso...')
hola('Carlos')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then( nombre => {
        return adios(nombre);
    })
    .then(() => {
        console.log('Terminado el proceso...');
    })
    .catch(error => {
        console.log('Ha habido un error'),
        console.log(error)
    })