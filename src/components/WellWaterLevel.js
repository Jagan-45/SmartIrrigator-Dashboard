import React from 'react';
import { Box, Text,CircularProgress,CircularProgressLabel } from '@chakra-ui/react';

const WellWaterLevel = () => {
  const wellWaterLevel = 60; // Example value

  return (
    <Box borderWidth="1px" borderRadius="lg" p="4">
      <Text fontSize="xl">Well Water Level</Text>
      <CircularProgress value={wellWaterLevel} size="120px" color="teal.500">
            <CircularProgressLabel>{wellWaterLevel}%</CircularProgressLabel>
        </CircularProgress>
    </Box>
  );
};

export default WellWaterLevel;
