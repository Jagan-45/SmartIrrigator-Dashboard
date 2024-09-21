// src/components/DripLineStats.js
import { Box, Flex, Text, Button, CircularProgress, CircularProgressLabel, Grid, Icon, useColorModeValue } from '@chakra-ui/react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { CheckCircleIcon } from '@chakra-ui/icons';

// Sample data for irrigations over the week
const data = [
  { day: 'Sun', irrigated: 5 },
  { day: 'Mon', irrigated: 3 },
  { day: 'Tue', irrigated: 4 },
  { day: 'Wed', irrigated: 6 },
  { day: 'Thu', irrigated: 2 },
  { day: 'Fri', irrigated: 5 },
  { day: 'Sat', irrigated: 7 },
];

export const DripLineStats = ({ irrigations, waterLevel, valveStatus, lastIrrigationTime }) => {
  const greenGradient = useColorModeValue('green.400', 'green.300');

  return (
    <Flex direction="column" p="20px"  ml='6px' mr='6px' bg="white" borderRadius="10px" boxShadow="sm" w="100%">
      {/* Irrigation Status Section */}
      <Grid templateColumns="1fr 2fr 1fr" gap={6} mb="10">
        <Box>
          {/* Apply justifyContent to Flex container */}
          <Flex alignItems="center" gap="2" justifyContent="space-between"> 
            <Text fontWeight="bold" fontSize="lg">Drip Line 1</Text>
            {/* Use Flex for status icon and text */}
            <Flex alignItems="center" gap="1" color="gray.500">
              <CheckCircleIcon boxSize="4" color="green.500" /> 
              <Text fontSize="sm">On track</Text> 
            </Flex>
          </Flex>
          <Text fontSize="4xl" mt="2" fontWeight="bold" color={greenGradient}>{irrigations}</Text> 
          <Text fontSize="sm" color="gray.500">times irrigated in this week</Text>
          <Text fontSize="sm" mt="2" color="gray.500">Last irrigated:</Text>
          <Flex alignItems="center" gap="1">
            <Text fontSize="md" color="green.500">+{lastIrrigationTime} </Text>
            <Text fontSize="sm" color="gray.500">hrs ago</Text>
          </Flex>
        </Box>
        <Box p="4" bg="gray.50" borderRadius="10px" boxShadow="sm">
          <Text fontWeight="bold" mb="4">Irrigated Days</Text>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
              <XAxis dataKey="day" stroke="#8884d8" tickLine={false} />
              <YAxis hide />
              <Tooltip />
              <Bar dataKey="irrigated" fill="url(#colorMix)" radius={[8, 8, 0, 0]} animationDuration={500} barSize={10} />
              <defs>
                <linearGradient id="colorMix" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#3182CE', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#38B2AC', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </Box>

        <Box textAlign="center">
          <CircularProgress value={waterLevel} size="120px" color="teal.500">
            <CircularProgressLabel fontSize="2xl">{waterLevel}%</CircularProgressLabel>
          </CircularProgress>
          <Text mt="4" fontWeight="bold">Moisture Level</Text>
          <Text fontSize="md">Valve: {valveStatus ? 'Open' : 'Closed'}</Text>
          <Button mt="4" colorScheme="teal">Flip Valve</Button>
        </Box>
      </Grid>
    </Flex>
  );
};