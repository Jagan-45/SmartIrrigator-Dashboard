import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'linear-gradient(to bottom, #2C3E50, #000000)',
        color: 'white',
      },
    },
  },
  fonts: {
    body: `'Roboto', sans-serif`,
    heading: `'Poppins', sans-serif`,
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: 'bold',
      },
    },
    Text: {
      baseStyle: {
        fontWeight: 'bold',
        color: 'white',
      },
    },
  },
});

export default theme;
