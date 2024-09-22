import React, { useEffect, useState } from 'react';
import { useWeather } from '../hooks/useWeather'; 
import { Text } from '@chakra-ui/react';

const TypewriterEffect = () => {
  const { popData } = useWeather(); 
  const [displayText, setDisplayText] = useState('');
  const [percentageColor, setPercentageColor] = useState('black');
  const [words, setWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    if (popData && popData.length > 0) {
      const popPercentage = Math.round(popData[0].pop * 100); 
      const textToDisplay = `Chance of raining today is ${popPercentage}%`;
      setWords(textToDisplay.split(' ')); 
      setPercentageColor(
        popPercentage <= 40 ? 'darkred' :
        popPercentage <= 70 ? 'orange' : 
        'green'
      );
    }
  }, [popData]);

  useEffect(() => {
    if (words.length > 0 && currentWordIndex < words.length) {
      const interval = setInterval(() => {
        setDisplayText(prev => prev + (prev ? ' ' : '') + words[currentWordIndex]);
        setCurrentWordIndex(prev => prev + 1);
      }, 500); 
      return () => clearInterval(interval);
    }
  }, [currentWordIndex, words]);

  return (
    <Text fontSize="xl" fontWeight="bold" color={percentageColor}>
      {displayText}
    </Text>
  );
};

export default TypewriterEffect;
