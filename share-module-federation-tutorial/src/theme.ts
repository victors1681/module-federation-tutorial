import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.

//Note: if you try to move the next/font into the share package nextjs will have issue compiling the font

export const initTheme = (nextFont: any) =>
  createTheme({
    palette: {
      primary: {
        main: '#e98f0f',
      },
      secondary: {
        main: '#e98f0f',
      },
      error: {
        main: red.A400,
      },
    },
    typography: {
      fontFamily: nextFont.style.fontFamily,
    },
  });

export default initTheme;
