import React, { useState, useEffect } from 'react';
import { Flex, Box, Text, Button, useColorModeValue } from '@chakra-ui/react';
import { DripLineStats } from './DripLineStats';
import { WaterUsageGraph } from './WaterUsageGraph';
import { WaterUsagePieChart } from './WaterUsagePieChart';
import WellWaterLevel from './WellWaterLevel';
import { ref, onValue } from "firebase/database";
import { db } from '../firebase'; 
import TypewriterEffect from './TypewriterEffect';

export const MainDashboard = () => {
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const hoverBgColor = useColorModeValue('gray.200', 'gray.600');

  const [dripData, setDripData] = useState({
    total_drips: 2, 
    valve1: 0,
    valve2: 0,
    soil1: 0,
    soil2: 0,
    waterlevel: 89,
    irrigations1: 35,
    irrigations2:31,
    lastIrrigationTime1: 4,
    lastIrrigationTime2:6,
    weeklyIrrigationData1: [
      { day: 'Sun', irrigated: 5 },
      { day: 'Mon', irrigated: 3 },
      { day: 'Tue', irrigated: 4 },
      { day: 'Wed', irrigated: 6 },
      { day: 'Thu', irrigated: 2 },
      { day: 'Fri', irrigated: 5 },
      { day: 'Sat', irrigated: 7 },
    ],
    weeklyIrrigationData2: [
      { day: 'Sun', irrigated: 1 },
      { day: 'Mon', irrigated: 6 },
      { day: 'Tue', irrigated: 2 },
      { day: 'Wed', irrigated: 9 },
      { day: 'Thu', irrigated: 10 },
      { day: 'Fri', irrigated: 5 },
      { day: 'Sat', irrigated: 3 },
    ],
  });
  const [currentDrip, setCurrentDrip] = useState(1);

  useEffect(() => {
    const query = ref(db); 
    console.log(query)
    return onValue(query, (snapshot) => {

    console.log('Snapshot exists:', snapshot.exists());
    console.log('Snapshot data:', snapshot.val());
      const data = snapshot.val();
      console.log(data)
      if (snapshot.exists()) {
        setDripData({
          total_drips: data.total_drips,
          valve1: data.valve1,
          valve2: data.valve2,
          soil1: data.soil1,
          soil2: data.soil2,
          waterlevel: data.waterlevel,
          lastIrrigationTime1:data.lastIrrigationTime1,
          lastIrrigationTime2:data.lastIrrigationTime2,
          irrigations1:data.irrigations1,
          irrigations2:data.irrigations2,
          
        });
      }
    });
  }, []);

  const handleNext = () => {
    console.log(currentDrip)
    setCurrentDrip((prev) => prev + 1);
    if (currentDrip < dripData.total_drips) {
      console.log(currentDrip)
      setCurrentDrip((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentDrip > 1) {
      setCurrentDrip((prev) => prev - 1);
    }
  };
  return (
    <Flex direction="column" p="20px" bg={bgColor} minHeight="100vh" flexGrow="1">
       <Flex align="center" mb="6">
        <Text fontSize="2xl" fontWeight="bold" mr="4">Main Dashboard</Text>
        <TypewriterEffect />
      </Flex>
      <Text fontSize="md" fontWeight="light" color="grey" mb="4">Hello, Welcome back</Text>

      <Flex justify="space-between" mb="10">
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
          transform='translateY(-50%)' 
          onClick={handlePrevious} 
          isDisabled={currentDrip === 1}
        >
           &lt;
        </Button>

        <DripLineStats 
                dripNumber={currentDrip}
                irrigations={dripData[`irrigations${currentDrip}`]} 
                waterLevel={dripData.waterlevel} 
                valveStatus={dripData[`valve${currentDrip}`]}  
                soilMoisture={dripData[`soil${currentDrip}`]}  
                lastIrrigationTime={dripData[`lastIrrigationTime${currentDrip}`]} 
                weeklyIrrigationData={dripData[`weeklyIrrigationData${currentDrip}`]} 
              />

       
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
          transform='translateY(-50%)'
          onClick={handleNext} 
          isDisabled={currentDrip === dripData.total_drips} 
        >
          &gt;
        </Button>
      </Flex>

      <Flex justify="space-between">
        <Box w="30%" bg="white" p="20px" borderRadius="10px" boxShadow="sm">
          <WellWaterLevel waterLevel={dripData.waterlevel}/>
        </Box>
        <WaterUsageGraph />
        <WaterUsagePieChart />
      </Flex>
    </Flex>
  );
};

