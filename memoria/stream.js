const fs = require('fs');

let data = '';

let readbleStream = fs.createReadStream(__dirname + '/input.txt')

readbleStream.setEncoding('utf-8')

readbleStream.on('data', function(chunk) {
    data += chunk;
});

readbleStream.on('end', function() {
    console.log(data);
})

// Escritura
process.stdout.write('Hola');

