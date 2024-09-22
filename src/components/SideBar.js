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
      minWidth={"200px"}
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
        <Link as={RouterLink} to="/crop-recommendations" color="gray.400">
          <Icon as={ChevronRightIcon} mr="2" />
          Crop Recommendations
        </Link>
        <Link as={RouterLink} to="/direct-sales-facilitation" color="gray.400">
          <Icon as={ChevronRightIcon} mr="2" />
          Direct Sales Facilitation
        </Link>
      </VStack>
    </Box>
  );
};

