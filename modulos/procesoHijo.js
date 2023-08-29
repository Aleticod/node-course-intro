const { exec, spawn } = require('child_process');
// const exec = require('child_process').exec;

exec('ls -la', (err, stdout, sterr) => {
    if (err) {
        console.error(err.message);
        return false;
    }

    console.log(stdout);
})

exec('node modulos/console.js', (err, stdout, sterr) => {
    if (err) {
        console.error(err.message);
        return false;
    }

    console.log(stdout);
})

let proceso = spawn('ls', ['-la']);
console.log(proceso.pid);
proceso.stdout.on('data', function(dato) {
    console.log(dato.toString());
})

proceso.on('exit', function() {
    console.log('El proceso ha terminado...');
})