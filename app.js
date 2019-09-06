const lugar = require('./lugar/lugar');
const clima = require('./clima/clima')
    //const request = require('request');


const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'direccion de la cuidad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log)
//     .catch(console.log)

// clima.getClima(-40.070000, -72.879997)
//     .then(console.log)

//     .catch(console.log)

const getInfo = async(dir) => {
    try {

        const resp = await lugar.getLugarLatLng(dir);
        const cli = await clima.getClima(resp.lat, resp.lng);
        return (`la clima para ${ resp.direccion} es de : ${cli}`);

    } catch (e) {

        return `No se pudo determinar el clima de ${ dir }`;

    }
}

clima.getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)