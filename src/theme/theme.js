"use client";
import { createTheme } from "@mui/material/styles";

// export const roboto = Roboto({
//   weight: ['300', '400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap',
//   fallback: ['Helvetica', 'Arial', 'sans-serif'],
// });

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#3C828E",
      greyShade1: "#7E7E7E",
      greyShade2: "#575757",
      greyShade3: "#AAAAAA",
      greyShade4: "#616161",
      greyShade5: "#707070",
      greyShade6: "#e3e3e3",
      greyShade7: "#e7e7e7",
      blackShade1: "#242424",
      white: "#ffffff",
      whiteShade1: "#CFCFCF",
      greenShade1: "#63A5B1",
      brownShade1: "#BFB2A1",
      borwnShade2: "#6D6D6D",
      black: "#000000",
      headerShade: "#222222e0",
    },
    secondary: {
      main: "#19857b",
      error: "#ff4d4d",
    },
    error: {
      main: "#f4f4f4",
    },
  },
  typography: {},
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1500,
      xxl: 1900,
      xxxl: 2400,
    },
  },
});

export default theme;
