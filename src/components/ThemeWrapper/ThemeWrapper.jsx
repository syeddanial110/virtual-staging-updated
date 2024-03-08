import theme from "@/theme/theme";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";

const ThemeWrapper = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeWrapper;
