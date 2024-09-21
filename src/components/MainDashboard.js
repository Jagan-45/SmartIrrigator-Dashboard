import { Flex, Box, Text, Button, useColorModeValue } from '@chakra-ui/react';
import { DripLineStats } from './DripLineStats';
import { WaterUsageGraph } from './WaterUsageGraph';
import { WaterUsagePieChart } from './WaterUsagePieChart';
import WellWaterLevel from './WellWaterLevel';

export const MainDashboard = () => {
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const hoverBgColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Flex direction="column" p="20px" bg={bgColor} minHeight="100vh" flexGrow="1">
      <Text fontSize="2xl" fontWeight="bold" mb="6">Main Dashboard</Text>
      <Text fontSize="md" fontWeight="light" color="grey" mb="4">Hello, Welcome back</Text>

      <Flex justify="space-between" mb="10">
        {/* Button with gradient background */}
        <Button
          bgGradient="linear(to-r, cyan.400, blue.500)"
          _hover={{ bgGradient: "linear(to-r, cyan.500, blue.600)" }}
          transition="background-color 0.3s ease"
          rounded="lg"
          padding="10px 20px"
          margin-right="5px"
          fontSize="lg"
          fontWeight="bold"
          position='relative'
          top="50%"
          transform='translateY(-50%)' // Add this line to center vertically
        >
          {'<'}
        </Button>

        <DripLineStats irrigations={12} waterLevel={70} valveStatus={true} lastIrrigationTime={3} />

        {/* Button with gradient background */}
        <Button
          bgGradient="linear(to-r, cyan.400, blue.500)"
          _hover={{ bgGradient: "linear(to-r, cyan.500, blue.600)" }}
          transition="background-color 0.3s ease"
          rounded="lg"
          padding="10px 20px"
          fontSize="lg"
          fontWeight="bold"
          position='relative'
          top="50%"
          transform='translateY(-50%)' // Add this line to center vertically
        >
          {'>'}
        </Button>
      </Flex>

      <Flex justify="space-between">
        <Box w="30%" bg="white" p="20px" borderRadius="10px" boxShadow="sm">
          <WellWaterLevel />
        </Box>
        <WaterUsageGraph />
        <WaterUsagePieChart />
      </Flex>
    </Flex>
  );
};

