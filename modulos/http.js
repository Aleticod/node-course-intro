const http = require('http');

function router(req, res) {
    console.log('Nueva peticion');
    console.log(req.url);

    switch(req.url)
    {
        case '/hola':
            res.write('Hola, que tal ...');
            res.end();
            break;
        default:
            res.write('Error 404: No se lo que quieres')
            res.end()
    }
} 

// Creacion de un servidor basico
http.createServer(router).listen(3000);