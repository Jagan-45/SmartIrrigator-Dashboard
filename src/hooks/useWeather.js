import { useState, useEffect } from 'react';
import axios from 'axios';
import { useGeolocated } from 'react-geolocated';

export const useWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [popData, setPopData] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = '9953b82537121b01a972ccb2debd9d75'; 
  const defaultCity = 'Chennai'; 
  const extractPopData = (forecastResponse) => {
    const forecastList = forecastResponse.list || [];

    const precipitationData = forecastList.map((forecast) => ({
      time: forecast.dt_txt, 
      pop: forecast.pop, 
      rain: forecast.rain ? forecast.rain['3h'] : 0, 
      snow: forecast.snow ? forecast.snow['3h'] : 0, 
    }));

    setPopData(precipitationData);
  };

  const fetchWeatherAndForecast = async (lat, lon) => {
    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      );
      setWeatherData(weatherResponse.data);

      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      );
      setForecastData(forecastResponse.data);
      extractPopData(forecastResponse.data); 
      console.log("Forecast with PoP data:", forecastResponse.data);
    } catch (err) {
      setError('Error fetching weather data.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchWeatherByCity = async (city) => {
    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeatherData(weatherResponse.data);

      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
      );
      setForecastData(forecastResponse.data);
      extractPopData(forecastResponse.data);
      console.log("Forecast with PoP data:", forecastResponse.data);
    } catch (err) {
      setError('Error fetching weather data for the default city.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    },
    userDecisionTimeout: 5000,
  });

  useEffect(() => {
    if (isGeolocationAvailable && isGeolocationEnabled) {
      // if (coords) {
      //   console.log('Coordinates:', coords); 
      //   fetchWeatherAndForecast(coords.latitude, coords.longitude);
      // }
      fetchWeatherByCity(defaultCity);
    } else {
      console.error('Geolocation not available or enabled, falling back to default city.');
      fetchWeatherByCity(defaultCity);
    }
  }, [coords, isGeolocationAvailable, isGeolocationEnabled]);

  return { weatherData, forecastData, popData, loading, error };
};
