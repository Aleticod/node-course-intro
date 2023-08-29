function saludar() {
    console.log('Hola, como estas?')
}

// Exportar un funcion del modulo
// module.exports = saludar;

// Exportar un objeto
module.exports = {
    saludar,
    prop1: 'Quien eres'
}