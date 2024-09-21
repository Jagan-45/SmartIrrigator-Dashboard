// src/App.js
import { ChakraProvider, Flex } from '@chakra-ui/react';
import { MainDashboard } from './components/MainDashboard';
import { SideBar } from './components/SideBar';

function App() {
  return (
    <ChakraProvider>
      <Flex>
        <SideBar />
        <MainDashboard />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
