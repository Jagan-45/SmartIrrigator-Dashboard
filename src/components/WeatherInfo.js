import React from 'react';
import { GridItem, Stack, Text, Icon } from '@chakra-ui/react';
import { FiCloud, FiSun } from 'react-icons/fi'; 

export const WeatherInfo = ({ weatherData }) => {
  const icon = weatherData.weather[0].icon; 
  const weatherIcons = {
    "01d": FiSun, 
    "02d": FiCloud, 
  };

  return (
    <>
      <GridItem colSpan={1} bg="gray.700" p={4} borderRadius="md" boxShadow="md">
        <Stack align="center" spacing={4}>
          <Icon as={weatherIcons[icon] || FiSun} w={16} h={16} color="yellow.400" />
          <Text fontSize="4xl" color="white">{weatherData.main.temp}°C</Text>
          <Text fontSize="lg" color="white">{weatherData.weather[0].description}</Text>
          <Text fontSize="sm" color="gray.400">{new Date().toLocaleDateString()}</Text>
          <Text fontSize="lg" fontWeight="bold" color="white">Location: {weatherData.name}</Text>
        </Stack>
      </GridItem>

      <GridItem colSpan={2} bg="gray.700" p={4} borderRadius="md" boxShadow="md">
        <Stack spacing={4}>
          <Text color="white">Humidity: {weatherData.main.humidity}%</Text>
          <Text color="white">Pressure: {weatherData.main.pressure} hPa</Text>
          <Text color="white">Visibility: {weatherData.visibility / 1000} km</Text>
          <Text color="white">Wind Speed: {weatherData.wind.speed} m/s</Text>
        </Stack>
      </GridItem>
    </>
  );
};
