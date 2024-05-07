"use client";

import { Grid } from "@mui/material";
import React from "react";
import WebHeader from "./WebHeader";
import MobileHeader from "./MobileHeader";

const Header = () => {
  return (
    <Grid
      container
      sx={{
        backgroundColor: (theme) => theme.palette.primary.headerShade,
      }}
    >
      <Grid item xs={12} display={{ xs: "none", lg: "block" }}>
        <WebHeader />
      </Grid>
      <Grid item xs={12} display={{ xs: "block", lg: "none" }}>
        <MobileHeader />
      </Grid>
    </Grid>
  );
};

export default Header;
