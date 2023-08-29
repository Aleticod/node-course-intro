function serompe() {
    return 3 + z;
}

try {
    serompe();
} catch(err) {
    console.error('Vaya, algo se ha roto');
    console.error(err.message);
}

console.log('Esto se ejecuto despues');

// Capturar errores en asincronia
function seRompeAsincrona(callback) {
    setTimeout(() => {
        try {
            return 3 + z;
        } catch (err) {
            console.error('Error en la funcion asincrona')
            callback(err)
        }
    })
}

try {
    seRompeAsincrona((err) => {
        console.log('Hay error: ' + err.message);
    })
} catch (err) {
    console.error('Hubo un error');
}