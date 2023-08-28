console.log('Algo');
console.info('Algo');
console.warn('Warning');
console.error('Error');

var tabla = [
    {
        a: 1,
        b: 'Z'
    },
    {
        a: 2,
        b: 'A'
    }
]

console.table(tabla);

console.group('Conversacion: ')
console.log('Hola');
console.log('bla bla bla');
console.log('Adios')
console.groupEnd()

console.log('Otro tema')

console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces')
console.count('veces');
console.count('veces');