const express = require('express');
const WeatherController = require('../controllers/weatherController.js');

const router = express.Router();

router.get('/', WeatherController.getWeather);

module.exports = router;
