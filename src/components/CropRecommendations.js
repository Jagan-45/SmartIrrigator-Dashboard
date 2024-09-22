import React from 'react';
import { Box, Button, Text, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import backgroundImage from './agric_back_crop.png';

const MotionButton = motion(Button);

export const CropRecommendations = () => {
  return (
    <Box
      bgImage={backgroundImage}
    bgSize="contain" 
    bgPosition="center top" 
    width={'100%'}
    minH="100vh"
    display="flex"
    alignItems="center"
    justifyContent="center"
    textAlign="center"
    p={5}
    color="white"
    opacity={0.8} 
    objectFit="contain" 
    >
      <Flex direction="column" alignItems="center">
        <Text fontSize="4xl" fontWeight="bold" mb={4}>
          Grow Your Future
        </Text>
        <Text fontSize="lg" mb={8}>
          Discover the best crops for your land and climate!
        </Text>
        <MotionButton
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          bg="teal.400"
          color="white"
          fontSize="lg"
          px={8}
          py={4}
          borderRadius="full"
          _hover={{ bg: 'teal.500' }}
        >
          See the Future
        </MotionButton>
      </Flex>
    </Box>
  );
};


