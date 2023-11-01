import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

const theme = createTheme({
  palette: {
    mode: isDarkMode ? 'dark' : 'light',
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: isDarkMode ? 'grey' : 'grey',
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: isDarkMode ? 'white' : 'black',
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: isDarkMode ? 'white' : 'black',
          },
        },
        input: {
          color: isDarkMode ? 'white' : 'black',
          backgroundColor: isDarkMode ? 'transparent' : 'white',
        }
      },
    },
    MuiPickersBasePicker: {
      styleOverrides: {
        pickerView: {
          backgroundColor: isDarkMode ? 'transparent' : 'white',
        },
      },
    },
  },
});

export default theme;
