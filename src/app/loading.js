"use client";

import UILoader from "@/components/UILoader/UILoader";
import { Box, Grid } from "@mui/material";
import React from "react";

const LoadingUI = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={3}>
          <UILoader />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoadingUI;
