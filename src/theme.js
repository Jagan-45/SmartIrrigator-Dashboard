// theme.js (Optional for custom Chakra UI theme)
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Poppins', sans-serif",
  },
  colors: {
    brand: {
      100: '#f7fafc',
      900: '#1a202c',
    },
  },
});

export default theme;
