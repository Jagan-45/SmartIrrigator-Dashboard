import { Box, VStack, Link, Text, Icon } from '@chakra-ui/react';
import { ChevronRightIcon, SettingsIcon, StarIcon } from '@chakra-ui/icons';

export const SideBar = () => {
  return (
    <Box
      bg="gray.900"
      w={{ base: '100%', md: '240px' }} // adjust width based on screen size
      h="122vh" // set height to 100vh
      flexGrow="1" // make the sidebar take up the remaining height
      p="20px"
      color="white"
    >
      <Text fontSize="md" mb="8">
        Smart India's <span className="title">Intellirrigator</span>
      </Text>
      <VStack align="start" spacing="4">
        <Link fontWeight="bold" color="teal.300" href="#">
          <Icon as={StarIcon} mr="2" /> {/* Replace HomeIcon with StarIcon or any other valid icon */}
          Main Dashboard
        </Link>
        <Link color="gray.400" href="#">
          <Icon as={ChevronRightIcon} mr="2" />
          Other Section
        </Link>
        <Link color="gray.400" href="#">
          <Icon as={SettingsIcon} mr="2" />
          Settings
        </Link>
      </VStack>
    </Box>
  );
};