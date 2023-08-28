// Esta funcion es asincrona
async function hola(nombre) {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            console.log('Hola ' + nombre);
            resolve(nombre)
        }, 1000);
    });
}

async function hablar() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log('Bla bla bla ...');
            resolve('Estoy hablando...')
        }, 1000);
    });
}

async function conversacion(nombre, veces, callback) {
    if (veces > 0) {
        hablar(function() {
            conversacion(nombre, veces - 1, callback);
        })
    } else {
        callback(nombre);
    }
    
}

// Esta funcion es asincrona
async function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Adios ' + nombre);
            resolve();
        }, 800);
    })
}


console.log('Iniciando el proceso...')
async function main() {
    let nombre = await hola('Carlos');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Terminando el proceso ...')
}

main();