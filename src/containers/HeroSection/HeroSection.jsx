"use client";

import { Grid } from "@mui/material";
import React from "react";
import HeroSectionSlider from "./HeroSectionSlider";
import { GoogleGemini } from "@/components/GoogleGemini/GoogleGemini";

const HeroSection = () => {
  return (
    <Grid
      container
      px={
        {
          // xs: "15px",
          //  md: 3.5
        }
      }
    >
      <Grid item xs={12}>
        <HeroSectionSlider />
      </Grid>
    </Grid>
  );
};

export default HeroSection;
