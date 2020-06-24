const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const clima = require('./clima/clima');

clima.getClima(argv.direccion)
    .then(console.log)
    .catch(console.log);