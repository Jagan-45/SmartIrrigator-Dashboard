import React from 'react';
import { Box, Text, Icon, VStack } from '@chakra-ui/react';
import { LockIcon } from '@chakra-ui/icons';

const DirectSalesFacilitation = () => {
  return (
    <Box
      bg="gray.200"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      width={"100%"}
      p={5}
    >
      <VStack spacing={4}>
        
        <Icon as={LockIcon} boxSize="150px" color="gray.500" /> 

    
        <Text fontSize="3xl" fontWeight="bold" color="gray.600">
          Coming Soon: Direct Sales for Farmers, No Middlemen!
        </Text>
        <Text fontSize="lg" color="gray.600">
          Stay tuned for our upcoming feature that will revolutionize the way farmers sell their produce. No more middlemen, just direct sales!
        </Text>
      </VStack>
    </Box>
  );
};

export default DirectSalesFacilitation;
