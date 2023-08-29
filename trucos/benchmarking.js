console.time('todo');
let suma = 0;
console.time('bucle');

for (let i = 0; i < 10000000; i++) {
	suma += 1;
}

console.timeEnd('bucle');

console.time('asincrono');
console.log('Incia el proceso asincrono ...');
asincrona()
    .then(() => {
        console.timeEnd('asincrono');
    });

console.timeEnd('todo');

function asincrona() {
    return new Promise((resolve) => {
        setTimeout(function() {
            console.log('Termina el proceso asincrono ...');
            resolve();
        }, 1000)
    })
}