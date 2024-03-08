"use client";

import { Grid } from "@mui/material";
import React from "react";
import HeroSectionSlider from "./HeroSectionSlider";

const HeroSection = () => {
  return (
    <Grid container px={3.5} >
      <Grid item xs={12}>
        <HeroSectionSlider />
      </Grid>
    </Grid>
  );
};

export default HeroSection;
