// src/App.js
import { ChakraProvider, Flex } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainDashboard } from './components/MainDashboard';
import { SideBar } from './components/SideBar';
import { WeatherPrediction } from './components/WeatherPrediciton';
import { CropRecommendations } from './components/CropRecommendations';
import  DirectSalesFacilitation  from './components/DirectSalesFacilitation';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Flex>
          <SideBar />
          <Routes>
            <Route path="/dashboard" element={<MainDashboard />} />
            <Route path="/weather" element={<WeatherPrediction />} />
            <Route path="/crop-recommendations" element={<CropRecommendations />} />
            <Route path="/direct-sales-facilitation" element={<DirectSalesFacilitation />} />
          </Routes>
        </Flex>
      </Router>
    </ChakraProvider>
  );
}

export default App;
