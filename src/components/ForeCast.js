import React from 'react';
import { Grid, GridItem, Stack, Text, Icon } from '@chakra-ui/react';
import { FiCloud, FiSun } from 'react-icons/fi'; 

export const Forecast = ({ forecastData }) => {
  return (
    <Grid templateColumns="repeat(7, 1fr)" gap={4} mt={5}>
      {forecastData.list.slice(0, 7).map((forecast, index) => {
        const icon = forecast.weather[0].icon;
        const weatherIcons = {
          "01d": FiSun, 
          "02d": FiCloud, 
          "03d": FiCloud, 
        };
        return (
          <GridItem key={index} bg="gray.700" p={4} borderRadius="md" boxShadow="md">
            <Stack align="center">
              <Text fontSize="xl" color="white">{new Date(forecast.dt * 1000).toLocaleDateString()}</Text>
              <Icon as={weatherIcons[icon] || FiSun} w={12} h={12} color="yellow.400" />
              <Text color="white">High: {forecast.main.temp_max}°C</Text>
              <Text color="white">Low: {forecast.main.temp_min}°C</Text>
            </Stack>
          </GridItem>
        );
      })}
    </Grid>
  );
};
