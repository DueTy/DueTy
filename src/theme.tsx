import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#020202',
    },
    secondary: {
      main: '#a4a4a4',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;