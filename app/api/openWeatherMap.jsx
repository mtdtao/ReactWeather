var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=f68313c5697d3326ca63f87fcce8d70c&units=metric';

module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        console.log(requestURL);
        return axios.get(requestURL).then(function(res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function(res) {
            throw new Error(res.data.message);
        })
    }
}
