import "../App.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Box,
  Flex,
  VStack,
  Link,
  Text,
  Icon,
} from "@chakra-ui/react";
import { ChevronRightIcon, SettingsIcon, StarIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";


const Dashboard = () => <div>Dashboard Content</div>;
const Weather = () => <div>Weather Content</div>;

export const SideBar = () => {
  return (
    <Box
      bg="gray.900"
      w={{ base: "100%", md: "240px" }} 
      h="123vh"
      p="20px"
      color="white"
    >
      <Text fontSize="md" mb="8">
        Smart India's <span className="title">Intellirrigator</span>
      </Text>
      <VStack align="start" spacing="4">
        <Link as={RouterLink} to="/dashboard" fontWeight="bold" color="teal.300">
          <Icon as={StarIcon} mr="2" />
          Main Dashboard
        </Link>
        <Link as={RouterLink} to="/weather" color="gray.400">
          <Icon as={ChevronRightIcon} mr="2" />
          Weather Prediction
        </Link>
        <Link color="gray.400" href="#">
          <Icon as={SettingsIcon} mr="2" />
          Settings
        </Link>
      </VStack>
    </Box>
  );
};

const App = () => {
  return (
    <Router>
      <Flex minH="100vh"> 
        <SideBar /> 
        <Box flex="1" p="4"> 
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/weather" element={<Weather />} />
          </Routes>
        </Box>
      </Flex>
    </Router>
  );
};

export default App;