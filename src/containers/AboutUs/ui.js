"use client";

import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const BannerWrapper = styled(Box)(({ theme, bgImg, isGradient }) => ({
  backgroundImage: isGradient
    ? `linear-gradient(to bottom, rgb(245 246 252 / 0%), rgb(0 0 0 / 20%)), url("${bgImg.src}")`
    : `url("${bgImg.src}")`,
  height: "60vh",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    height: "30vh",
  },
  backgroundPosition: "bottom",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  display: "flex",
  alignItems: "flex-end",
  borderRadius: "35px",
  // background: 'rgba(0,0,0,0.4)',
}));

export const AboutUsCardWrapper = styled(Box)(({ theme, isDark }) => ({
  backgroundColor: "white",
  paddingTop: "50px",
  paddingRight: "35px",
  paddingLeft: "35px",
  padding: "30px",
  height: "300px",
  // width: "100%",
  borderRadius: "35px",
}));
