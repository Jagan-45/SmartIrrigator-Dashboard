import React from 'react';
import { Box, Text,CircularProgress,CircularProgressLabel } from '@chakra-ui/react';

const WellWaterLevel = ({waterLevel}) => {

  

  return (
    <Box borderWidth="1px" borderRadius="lg" p="4">
      <Text fontSize="xl">Well Water Level</Text>
      <CircularProgress value={waterLevel} size="120px" color="teal.500">
            <CircularProgressLabel>{waterLevel}%</CircularProgressLabel>
        </CircularProgress>
    </Box>
  );
};

export default WellWaterLevel;
