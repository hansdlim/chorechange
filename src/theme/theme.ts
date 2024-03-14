import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lime, purple } from '@mui/material/colors';
import Button from '@mui/material/Button';
import createPalette from '@mui/material/styles/createPalette';

import "@mui/material/styles/createPalette";
declare module "@mui/material/styles/createPalette" {
  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
    gold: PaletteOptions['primary'];
  }
  interface Palette {
    neutral: Palette['primary'];
    gold: Palette['primary'];
  }
}

const styles = {
  textDark:'#292929',
  orangeMain: '#FF8D20',
  orangeSecondary: '#d96c04',
  blueMain: '#5d96a3',
  neutralMain: '#e5e5e5',
  neutralDark:'#9D9D9D',
  neutralLight:'#F3F3F3',
  goldMain:'#EAC378',
}

const theme = createTheme({
  palette: {
    primary: {
        main: styles.blueMain,
    },
    secondary: {
        main:styles.orangeMain,
        dark:styles.orangeSecondary
    },
    neutral: {
        main:styles.neutralMain,
        dark:styles.neutralDark,
        light:styles.neutralLight
    },
    gold:{
      main:styles.goldMain
    }
  },
  typography:{
    allVariants:{
      color:styles.textDark
    }
  }
});

export default theme;