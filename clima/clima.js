const axios = require('axios');
const lugar = require('../lugar/lugar');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=735a43468b62ef9c22d811f08c80b17a&units?=metric`);
    return resp.data.main.temp;


}

const getInfo = async(dir) => {
    const resp = await lugar.getLugarLatLng(dir);
    const cli = await getClima(resp.lat, resp.lng);
    return (`la temperatura para ${ resp.direccion} es de : ${cli}`)
}



module.exports = {
    getClima,
    getInfo
}