const axios = require('axios');

const getClima = async(dir) => {

    try {
        const encodedUlr = encodeURI(dir);
        //console.log(encodedUlr);

        const instance = axios.create({
            baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${ encodedUlr }&appid=e8c96c5b0c25d162bd66e239f64a72e5`,
            //timeout: 1000,
            //headers: { 'x-rapidapi-key': '55d4832afdmsh3c3af9c5ed954e5p19e5c4jsn8037248920b2' }
        });

        /* axios({
                method: 'GET',
                baseURL: 'https://api.openweathermap.org/data/2.5/weather?id=2172797&appid=e8c96c5b0c25d162bd66e239f64a72e5'
            })
            .then(resp => {
                console.log(resp);
            }).catch(err => {
                console.log('Error!!!', err);
            }); */

        /* axios.get("https://api.openweathermap.org/data/2.5/weather?id=2172797&appid=e8c96c5b0c25d162bd66e239f64a72e5")
            .then((resp) => {
                console.log(resp.data.weather[0].description);
            })
         */

        const resp = await instance.get();

        const data = resp.data.main;
        const direccion = resp.data.name;
        const lat = resp.data.coord.lat;
        const lng = resp.data.coord.lon;
        const temp = resp.data.main.temp;
        const tempC = (temp - 273.15).toFixed(2);



        /* resp.then(resp => {
                let tempK = resp.data.main.temp;
                let tempC = (tempK - 273.15);
                console.log(tempC.toFixed(2));
                console.log(resp.status);
                //console.log(resp.data.weather[0].description);
            })
            .catch(err => {
                console.log('Error!!!', err);
            }) */

        return {
            direccion,
            lat,
            lng,
            tempC
        }

    } catch (e) {

        return `No hay resultados para ${dir}`;

    }

}

module.exports = {
    getClima
}