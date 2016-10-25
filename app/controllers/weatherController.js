const request = require('superagent');

class WeatherController {
  static getWeather(zipcode) {
    const baseUrl = `http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=PROCESS.ENV.API_KEY`;
    return request.get(baseUrl)
                  .then((weatherResponse) => {
                    return {
                            name: weatherResponse.body.name,
                            temp: weatherResponse.body.main.temp,
                            description: weatherResponse.body.weather[0].description,
                            icon: `http://openweathermap.org/img/w/${weatherResponse.body.weather[0].icon}.png`,
                            id: weatherResponse.body.id,
                          }
                    });
  }
}

module.exports = WeatherController;
