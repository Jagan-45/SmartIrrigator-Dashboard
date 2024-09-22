import React from 'react';
import { Box, Heading, Grid } from '@chakra-ui/react';
import { WeatherInfo } from './WeatherInfo';
import { Forecast } from './ForeCast';
import { SkeletonLoader } from './SkeletonLoader';
import { useWeather } from '../hooks/useWeather';

export const WeatherPrediction = () => {
  const { weatherData, forecastData, loading, error } = useWeather();

  if (loading) {
    return <SkeletonLoader />;
  }

  if (error) {
    return (
      <Box p={5} bg="gray.800" borderRadius="md">
        <Heading color="red.500">{error}</Heading>
      </Box>
    );
  }

  return (
    <Box
      p={8}
      bg="linear-gradient(to bottom, #2C3E50, #000000)"
      borderRadius="md"
      boxShadow="lg"
      w="100%"
    >
      <Heading mb={5} color="white" fontWeight="bold">
        Weather Prediction for {weatherData.name}
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <WeatherInfo weatherData={weatherData} />
      </Grid>

 
      <Heading size="md" mt={5} color="white" fontWeight="bold">
        2-Day Forecast
      </Heading>
      <Forecast forecastData={forecastData} />
    </Box>
  );
};
