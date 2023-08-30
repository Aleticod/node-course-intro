function asincrono(callback) {
    setTimeout(function() {
        try {
            // let z = 4;
            let a = 2 + z;
            callback(null, a);
        } catch (err) {
            console.error('Se produjo un error');
            callback(err, null);
        }
    })
}

asincrono((err, data) => {
    if(err) {
        console.log('Se capturo un error ...');
        console.error(err.message);
        return false;
    } else {
        console.log(data);
        return true;
    }
})