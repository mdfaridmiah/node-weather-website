const request = require('request')

const forecast = (latitude, longitude, callback) => {

    // const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + "&lon=" + longitude + '&appid=8151f8dd25645d7f11848df6420cb657&units=metric'
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=8151f8dd25645d7f11848df6420cb657&units=metric`

    request({ url, json: true }, (error, { body }) => { // body inside object /...think
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.cod == '400') {
            callback('Unable to find location', undefined)
        } else {
            // console.log(body)
            callback(undefined, 'It is currently ' + body.main.temp + " Deg Celsius.")
        }
    })
}


module.exports = forecast
